import DownloadButton from "@/components/download-button";
import { TbFileTypeDocx } from "react-icons/tb";
import { FaGithub, FaBookOpen } from "react-icons/fa";

export default function TemplateDownload() {
  return (
    <div>
      <div className="flex flex-col gap-y-5">
        <div>
          <h1 className="text-xl lg:text-2xl font-bold">
            Download Template Dokumen Skripsi
          </h1>
          <p className="text-sm lg:text-lg text-slate-400">
            Anda dapat mengunduh template dokumen skripsi dalam format DOCX melalui link Google Drive di bawah. Terdapat juga link GitHub untuk template LaTeX serta buku panduan untuk penulisan skripsi.
          </p>
        </div>
        <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
          <DownloadButton 
            icon={<TbFileTypeDocx size={24} />}
            targetText="DOCX Template"
            link="https://drive.google.com/drive/folders/1wd7zvvi7ukgo2TI5ZhfynmxNRs-h8IX7?usp=sharing"
            isLink
          />
          <DownloadButton 
            icon={<FaGithub size={24} />}
            targetText="LaTeX Template"
            link="https://github.com/ajipurwinarko/Unnes-TA"
            isLink
          />
          <DownloadButton 
            icon={<FaBookOpen size={24} />}
            targetText="Buku Panduan"
            link="https://drive.google.com/file/d/1Ky0ahGtO69IVPXi6Ow3sUSdH99VZ6eUM/view"
            isLink
          />
        </div>
      </div>
    </div>
  );
}
