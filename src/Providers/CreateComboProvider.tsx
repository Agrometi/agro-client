import { useLocation, useNavigate } from "react-router-dom";
import { createContext, useState, useEffect } from "react";

import { PATHS } from "@/config/paths";
import { comboStore } from "@/store";
import { useSearchParams } from "@/hooks/utils";

import { ComboT } from "@/interface/db/combo.types";
import { LoadingStatusT } from "@/interface/store/common.types";
import { SelectedProductT } from "@/interface/store/combo.store.types";

type CreateComboProviderT = {
  children: React.ReactNode;
};

type CreateComboContextT = {
  title: string;
  onTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  description: string;
  onDescriptionChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  price: number;
  onPriceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  existingAssets: Array<string>;
  addedExistingAssets: Array<string>;
  onStartSelectMedia: () => void;
  newAssets: Array<File>;
  onRemoveNewAsset: (fileIndex: number) => void;
  onChooseNewAsset: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage: string;
  onPublish: () => Promise<void>;
  addedProducts: Array<SelectedProductT>;
  onToggleExistingAsset: (src: string) => void;
  onDoneSelectMedia: () => void;
  status: LoadingStatusT;
  isUpdating: boolean;
  cleanUpForm: () => void;
};

export const CreateComboContext = createContext<CreateComboContextT>({
  title: "",
  onTitleChange: () => {},
  description: "",
  onDescriptionChange: () => {},
  price: NaN,
  onPriceChange: () => {},
  existingAssets: [],
  addedExistingAssets: [],
  onStartSelectMedia: () => {},
  newAssets: [],
  onRemoveNewAsset: () => {},
  onChooseNewAsset: () => {},
  errorMessage: "",
  onPublish: async () => {},
  addedProducts: [],
  onToggleExistingAsset: () => {},
  onDoneSelectMedia: () => {},
  status: { status: "IDLE", loading: false, error: false, message: "" },
  isUpdating: false,
  cleanUpForm: () => {},
});

const CreateComboProvider: React.FC<CreateComboProviderT> = ({ children }) => {
  const navigate = useNavigate();
  const { setParam, removeParam, getParam } = useSearchParams();

  // ========== Store State ==========

  const newAssets = comboStore.use.newAssets();
  const addNewFiles = comboStore.use.addNewFiles();
  const removeNewFile = comboStore.use.removeNewFile();

  const existingAssets = comboStore.use.existingAssets();
  const addedExistingAssets = comboStore.use.addedExistingAssets();
  const toggleExistingAsset = comboStore.use.toggleExistingAsset();

  const addedProducts = comboStore.use.addedProducts();

  const setComboDefaults = comboStore.use.setComboDefaults();
  const cleanUpComboForm = comboStore.use.cleanUpComboForm();

  // ========== Locale State ==========

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [description, setDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // ========== Control File Select ==========

  const onStartSelectMedia = () => setParam("media", "1");

  const onChooseNewAsset = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetFiles: FileList | null = e.target.files;
    const filesArray = targetFiles ? Array.from(targetFiles) : [];

    if (filesArray.length <= 0) return;

    if (errorMessage) setErrorMessage("");

    addNewFiles(filesArray);
  };

  const onRemoveNewAsset = (fileIndex: number) => removeNewFile(fileIndex);

  const onToggleExistingAsset = (src: string) => toggleExistingAsset(src);

  const onDoneSelectMedia = () => removeParam("media");

  // ========== Control Form ==========

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (errorMessage) setErrorMessage("");

    setTitle(() => e.target.value);
  };

  const onDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (errorMessage) setErrorMessage("");

    setDescription(() => e.target.value);
  };

  const onPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (errorMessage) setErrorMessage("");

    setPrice(() => +e.target.value);
  };

  // ========== Control Update ==========
  const { state } = useLocation();
  const candidateCombo: ComboT | undefined = state?.combo;
  const [isUpdating, setIsUpdating] = useState(false);

  const candidateComboId = getParam("combo");

  const cleanUpForm = () => {
    setTitle("");
    setPrice(0);
    setDescription("");
    cleanUpComboForm();
  };

  useEffect(() => {
    if (!candidateCombo || !candidateComboId) return;

    setIsUpdating(true);

    setTitle(candidateCombo.title);
    setDescription(candidateCombo.description);
    setPrice(candidateCombo.price);

    setComboDefaults(candidateCombo);
  }, [candidateCombo, candidateComboId]);

  // ========== API ==========

  const create = comboStore.use.create();
  const update = comboStore.use.update();
  const status = comboStore.use.createStatus();

  const onPublish = async () => {
    if (
      !title ||
      !description ||
      !price ||
      (!newAssets[0] && !addedExistingAssets[0])
    )
      return setErrorMessage("გთხოვთ შეავსოთ ფორმა სრულად");

    if (isUpdating && candidateComboId)
      await update({
        comboId: candidateComboId,
        data: {
          title,
          price,
          description,
        },
      });
    else if (!isUpdating && !candidateComboId)
      await create({ title, description, price });

    setTitle("");
    setDescription("");
    setPrice(0);

    navigate(PATHS.dashboard_create_combo_page);
  };

  return (
    <CreateComboContext.Provider
      value={{
        title,
        onTitleChange,
        description,
        onDescriptionChange,
        price,
        onPriceChange,
        existingAssets,
        addedExistingAssets,
        onStartSelectMedia,
        newAssets,
        onRemoveNewAsset,
        onChooseNewAsset,
        errorMessage,
        onPublish,
        addedProducts,
        onToggleExistingAsset,
        onDoneSelectMedia,
        status,
        isUpdating,
        cleanUpForm,
      }}
    >
      {children}
    </CreateComboContext.Provider>
  );
};

export default CreateComboProvider;
