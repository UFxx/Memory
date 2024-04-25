import html2canvas from "html2canvas";
import DonwloadIcon from "../../assets/donwload-icon.png";

function Donwload() {
  function capture() {
    const captureElem = document.querySelector(".chart-container");
    html2canvas(captureElem)
      .then((canvas) => {
        canvas.style.display = "none";
        document.body.appendChild(canvas);
        return canvas;
      })
      .then((canvas) => {
        const image = canvas.toDataURL("image/png");
        const a = document.createElement("a");
        a.setAttribute("download", "chart.png");
        a.setAttribute("href", image);
        a.click();
        canvas.remove();
      });
  }

  return (
    <img
      src={DonwloadIcon}
      alt="donwload icon"
      className="donwload-icon"
      onClick={capture}
    />
  );
}

export default Donwload;
