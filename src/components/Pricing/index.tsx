import * as Style from "./style";
import { useForm } from "react-hook-form";

export default function Pricing() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Style.Conteiner>
      <section>
        <h2>Margem de Lucro</h2>
        <div className="form-group">
          <div className="input-group">
            <label htmlFor="preco-produto">Preço do Produto</label>
            <input
              type="number"
              id="preco-produto"
              placeholder="R$"
              {...register("preco do produto", { required: true })}
            />
          </div>

          <div className="input-group">
            <label htmlFor="frete">Preço do Frete</label>
            <input
              type="number"
              id="frete"
              placeholder="R$"
              value={0}
              {...register("frete", { required: true })}
            />
          </div>

          <div className="input-group">
            <label htmlFor="preco-sugerido">Preço Sugerido pra Venda</label>
            <input
              type="number"
              id="preco-sugerido"
              placeholder="R$"
              {...register("preco-sugerido", { required: true })}
            />
          </div>
        </div>
      </section>

      <section>
        <h2>Markup</h2>

        <div className="form-Group">
          <h3>Custos Fixos</h3>

          <div className="input-group">
            <label htmlFor="taxa-percentual">R$ Taxa NuvemPago por venda</label>
            <input
              type="number"
              id="taxa-percentual"
              placeholder="R$"
              value={0.35}
              {...register("taxa-percentual", { required: true })}
            />
          </div>

          <div className="input-group">
            <label htmlFor="mensalidade">Mensalidade NuvemShop</label>
            <input
              type="number"
              id="mensalidade"
              placeholder="R$"
              value={60}
              {...register("mensalidade", { required: true })}
            />
          </div>

          <div className="input-group">
            <label htmlFor="salario">Sálario dos Colaboradores</label>
            <input
              type="number"
              name=""
              id="salario"
              placeholder="R$"
              value={1000}
              {...(register("salario"), { required: true })}
            />
          </div>
          <div className="input-group">
            <label htmlFor="colaboradores">Total de Colaboradores</label>
            <input
              type="number"
              value={3}
              {...register("colaboradores", { required: true })}
            />
          </div>
        </div>

        <div className="form-Group">
          <h3>Custos Variáveis</h3>

          <div className="input-group">
            <label htmlFor="taxa-fixa">% Taxa NuvemPago por venda</label>
            <input
              type="number"
              id="taxa-fixa"
              placeholder="%"
              value={4.09}
              {...register("taxa-fixa", { required: true })}
            />
          </div>
        </div>
      </section>
      {/*}
      <button onClick={() => handleSubmit(onsubmit)}></button>
  {*/}
    </Style.Conteiner>
  );
}
