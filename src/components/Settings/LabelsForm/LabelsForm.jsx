import { useForm } from "react-hook-form";

function LabelsForm(props) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      label1: "",
      label2: "",
      label3: "",
      label4: "",
      label5: "",
      label6: "",
    },
  });

  const onSubmit = (data) => {
    props.setLabels(Object.values(data));
  };
  return (
    <form className="columns-inputs" onChange={handleSubmit(onSubmit)}>
      <input
        type="text"
        name=""
        id=""
        {...register("label1")}
        placeholder="Название столбца 1"
      />
      <input
        type="text"
        name=""
        id=""
        {...register("label2")}
        placeholder="Название столбца 2"
      />
      <input
        type="text"
        name=""
        id=""
        {...register("label3")}
        placeholder="Название столбца 3"
      />
      <input
        type="text"
        name=""
        id=""
        {...register("label4")}
        placeholder="Название столбца 4"
      />
      <input
        type="text"
        name=""
        id=""
        {...register("label5")}
        placeholder="Название столбца 5"
      />
      <input
        type="text"
        name=""
        id=""
        {...register("label6")}
        placeholder="Название столбца 6"
      />
    </form>
  );
}

export default LabelsForm;
