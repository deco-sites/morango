import { ImageWidget } from "apps/admin/widgets.ts";

/**
 * @titleBy name
 */
export interface Banner {
  /** @description URL do link do banner */
  href: string;
  /** @description Nome do banner na interface do admin */
  name: string;
  /** @description Objeto representando a imagem */
  image: Image;
}

export interface Image {
  /** @description Texto alternativo da imagem */
  alt: string;
  /** @description URL da imagem do banner na versão mobile */
  srcsm: ImageWidget;
  /** @description URL da imagem do banner na versão desktop */
  srclg: ImageWidget;
}

/**
 * @param banners - Lista com os banners
 */
export interface Props {
  banners?: Banner[];
}

export const Banners = ({
  banners = [],
}: Props) => (
  <div className="">
    banners
  </div>
);

export default Banners;
