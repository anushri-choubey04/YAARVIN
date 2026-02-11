import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/common/PageHeader";

import UploadStepImage from "../../components/closet/UploadStepImage";
import UploadStepDetails from "../../components/closet/UploadStepDetails";
import UploadStepPricing from "../../components/closet/UploadStepPricing";
import UploadFooter from "../../components/closet/UploadFooter";

export default function UploadOutfit() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    title: "",
    description: "",
    price: "",
  });

  const steps = [
    <UploadStepImage image={image} setImage={setImage} />,
    <UploadStepDetails data={data} setData={setData} />,
    <UploadStepPricing data={data} setData={setData} />,
  ];

  const next = () => {
    if (step === steps.length - 1) {
      navigate("/closet/success");
    } else {
      setStep(step + 1);
    }
  };

  return (
    <>
      <PageHeader title="Upload Outfit" subtitle={`Step ${step + 1} of 3`} />
      <div className="p-4">
        {steps[step]}
        <UploadFooter
          onBack={() => setStep(step - 1)}
          onNext={next}
          isLast={step === steps.length - 1}
        />
      </div>
    </>
  );
}
