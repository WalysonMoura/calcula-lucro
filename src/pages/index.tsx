
import { Inter } from "@next/font/google";

import * as Style from "../styles/pages/home";

import Promotion from "../components/Promotion";
import Pricing from "../components/Pricing";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="gradients">
        <div className="gradients1"></div>
      </div>
      <Style.Content>
        <Promotion />
        <Pricing />
      </Style.Content>

      
    </>
  );
}
