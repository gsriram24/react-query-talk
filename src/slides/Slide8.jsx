import { QRCodeSVG } from "qrcode.react";

function Slide8() {
  return (
    <div className="flex flex-col items-center">
      <h4>Any questions?</h4>
      <hr className="w-full" />
      <p className="text-xl mt-12">Let&#39;s connect!</p>
      <QRCodeSVG size={450} value="https://linktr.ee/gsriram24" />
    </div>
  );
}

export default Slide8;
