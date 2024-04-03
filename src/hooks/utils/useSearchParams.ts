import { useNavigate, useLocation } from "react-router-dom";

export default function useSearchParams() {
  const navigate = useNavigate();
  const { search, pathname } = useLocation();

  const searchParams = new URLSearchParams(search);

  const setParam = (key: string, value: string) => {
    searchParams.set(key, value);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const setMultipleParams = (params: Array<{ key: string; value: string }>) => {
    params.forEach((param) => searchParams.set(param.key, param.value));
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const removeParam = (key: string) => {
    searchParams.delete(key);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const removeMultipleParams = (keys: Array<string>) => {
    keys.forEach((key) => searchParams.delete(key));
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const getParam = (key: string) => searchParams.get(key);

  return {
    setParam,
    setMultipleParams,
    removeParam,
    removeMultipleParams,
    getParam,
  };
}
