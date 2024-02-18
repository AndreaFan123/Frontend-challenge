import Image, { StaticImageData } from 'next/image';

interface ImageModalProps {
  onClose: () => void;
  imgItem?: StaticImageData;
}

export const ImageModal = ({ onClose, imgItem }: ImageModalProps) => {
  return (
    <div className="absolute px-4 md:px-[4.9rem] xl:px-[16.5rem] items-center bg-black/85 pt-36 flex flex-col gap-5 z-20 w-full h-full">
      <button
        onClick={onClose}
        className="text-white uppercase font-bold text-sm self-end"
      >
        Close
      </button>
      <div className="w-[327px] h-[263px] sm:w-[427px] sm:h-[363px] lg:w-[670px] lg:h-[520px]">
        <Image
          src={imgItem ? imgItem : ''}
          alt="Artwork Image"
          width="0"
          height="0"
          loading="lazy"
          className="object-cover self-center w-full h-full"
        />
      </div>
    </div>
  );
};
