import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { PATHS } from "@/config/paths";
import { useAppUIContext } from "@/Providers/useProviders";

import * as Styled from "./comboCard.styled";
import { LineClamp, Button } from "@/components/Layouts";
import { DeleteIcon, EditIcon } from "@/components/Layouts/Icons";

import { ComboT } from "@/interface/db/combo.types";

type ComboCardT = {
  combo: ComboT;
  showActions?: boolean;
  redirectPath: string;
  onDelete?: (comboId: string) => void;
};

const ComboCard: React.FC<ComboCardT> = ({
  combo,
  redirectPath,
  onDelete = () => {},
  showActions = true,
}) => {
  const navigate = useNavigate();

  const { activateDialog } = useAppUIContext();

  const onEdit = () =>
    navigate(`${PATHS.dashboard_create_combo_page}?combo=${combo._id}`, {
      state: { combo },
    });

  const onStartDelete = () =>
    activateDialog({
      type: "danger",
      target: "ნაკრების",
      title: "ნაკრების წაშლა",
      onConfirm: () => onDelete(combo._id),
      message: "დარწმუნებული ხართ გსურთ ამ <TARGET> წაშლა ?",
    });

  const onViewCombo = () => navigate(redirectPath);

  const [hoveredImg, setHoveredImg] = useState("");

  const images = combo.assets.filter((asset) => asset.endsWith(".webp"));

  const productsVariety = Array.from(
    new Set(combo.products.map((item) => item.product))
  ).length;

  return (
    <Styled.ComboCard className="combos-list__item">
      <div className="combo-assets">
        {images.slice(0, hoveredImg ? 6 : 2).map((src) => (
          <img
            key={src}
            src={src}
            alt={src}
            title={src}
            loading="lazy"
            onMouseOver={() => setHoveredImg(src)}
            className={`combo-card__img ${
              hoveredImg === src ? "hovered-thumbnail" : ""
            }`}
          />
        ))}

        {hoveredImg && (
          <>
            <img
              src={hoveredImg}
              alt=""
              className="combo-card__img hovered"
              onMouseLeave={() => setHoveredImg("")}
            />

            <button className="view-details__btn" onClick={onViewCombo}>
              ნახე დეტალურად
            </button>
          </>
        )}
      </div>

      <div className="combo-details">
        <LineClamp
          clamp={2}
          component="h4"
          text={combo.title}
          onClick={onViewCombo}
        />

        <LineClamp clamp={4} component="div" text={combo.description} />

        <div className="combo-details--duplex">
          <div>
            <span>ფასი:</span>
            &nbsp;
            <span>{combo.price}₾</span>
          </div>

          <div>
            <span>პროდუქტების ვარიაცია:</span>
            &nbsp;
            <span>{productsVariety}</span>
          </div>
        </div>

        {showActions && (
          <div className="combo-details--duplex">
            <Button show="danger" onClick={onStartDelete}>
              <DeleteIcon />
              წაშლა
            </Button>

            <Button onClick={onEdit}>
              <EditIcon />
              რედაქტირება
            </Button>
          </div>
        )}
      </div>
    </Styled.ComboCard>
  );
};

export default ComboCard;
