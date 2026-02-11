import { useEffect } from "react";

const MetaData = ({ title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return null;
};

export default MetaData;
