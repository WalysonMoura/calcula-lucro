import * as Style from "./style";
import { useForm } from "react-hook-form";

export default function Pricing() {
  const { register, handleSubmit ,formState: {errors}} = useForm();

  return (
    <Style.Conteiner>
      <section>
        <h2>Margem de Lucro</h2>
        <div className="form-group">
          <div className="input-group">
            <label htmlFor="">Preço do Produto</label>
            <input type="number" id="" {...register("",{required: true})}/>
          </div>

          <div className="input-group">
            <label htmlFor="">Preço do Frete</label>
            <input type="number" name="" id="" value={0} />
          </div>

          <div className="input-group">
            <label htmlFor="">Preço Sugerido pra Venda</label>
            <input type="number" name="" id="" />
          </div>
        </div>
      </section>

      <section>
        <h2>Markup</h2>

        <div className="form-Group">
          <h3>Custos Fixos</h3>

          <div className="input-group">
            <label htmlFor="">R$ Taxa NuvemPago por venda</label>
            <input type="number" name="" id="" value={0.35} />
          </div>

          <div className="input-group">
            <label htmlFor="">Mensalidade NuvemShop</label>
            <input type="number" name="" id="" value={60} />
          </div>

          <div className="input-group">
            <label htmlFor="">Sálario dos Colaboradores</label>
            <input type="number" name="" id="" value={1000} />
          </div>
          <div className="input-group">
            <label htmlFor="">Total de Colaboradores</label>
            <input type="number" name="" id="" value={3} />
          </div>
        </div>

        <div className="form-Group">
          <h3>Custos Variáveis</h3>

          <div className="input-group">
            <label htmlFor="">% Taxa NuvemPago por venda</label>
            <input type="number" name="" id="" value={4.09} />

          </div>
        </div>
      </section>
      {/*}
      <button onClick={() => handleSubmit(onsubmit)}></button>
  {*/}</Style.Conteiner>
  );
}
