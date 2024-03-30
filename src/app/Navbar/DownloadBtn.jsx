import dev_cv_ruben from "./dev_cv_ruben.pdf"
export const DownloadBtn = ({ label }) => {
  return (
    <a href={dev_cv_ruben} download>
      <button className="downloadBtn neo-5-out">
        {label}
      </button>
    </a>
  );
}
