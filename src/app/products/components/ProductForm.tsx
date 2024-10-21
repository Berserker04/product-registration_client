import { Button, Label, TextInput } from "flowbite-react";
import React, { useEffect } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface props {
  title: string;
  product?: IProduct;
  saveHandler: (product: IProduct) => void;
}

const schema = yup.object().shape({
  id: yup.string().default(""),
  name: yup
    .string()
    .required("El nombre es obligatorio")
    .min(3, "El nombre debe tener al menos 3 caracteres"),
});

const ProductForm = ({ title, product, saveHandler }: props) => {
  const {
    setFocus,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProduct>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: product?.name,
    },
  });

  const onSubmit: SubmitHandler<IProduct> = (data) => {
    if (product?.id) {
      data.id = product.id;
    }
    saveHandler(data);
  };

  useEffect(() => {
    setFocus("name");
  }, [setFocus]);

  console.log(saveHandler)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-6">
        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
          {title}
        </h3>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Nombre del producto" />
          </div>
          <TextInput
            id="name"
            placeholder="nombre de pronducto"
            {...register("name")}
          />
          {errors.name && <p className="text-red-600">{errors.name.message}</p>}
        </div>
        <div className="w-full flex justify-center">
          <Button type="submit">Guardar</Button>
        </div>
      </div>
    </form>
  );
};

export default ProductForm;
