import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "./ui/Input.jsx";
import { Select } from "./ui/Select.jsx";
import { Button } from "./ui/Button.jsx";

const hardcodedTranslations = {
  filipino: "Salamat",
  vietnamese: "Cảm ơn",
  indonesian: "Terima kasih",
};

export default function TranslateForm() {
  const { register, handleSubmit } = useForm({
    defaultValues: { target_language: "filipino" },
  });
  const [translated, setTranslated] = useState("");

  const onSubmit = (data) => {
    setTranslated(hardcodedTranslations[data.target_language]);
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input {...register("text")} placeholder="Enter text" />
        <Select {...register("target_language")}>
          <option value="filipino">Filipino</option>
          <option value="vietnamese">Vietnamese</option>
          <option value="indonesian">Indonesian</option>
        </Select>
        <Button type="submit">Translate</Button>
      </form>
      {translated && <p className="mt-4">{translated}</p>}
    </div>
  );
}
