import { useState } from 'react';
import {
  UploadCloud,
  RefreshCw,
  AlertCircle,
  Trash2,
} from 'lucide-react';

const ACCEPTED_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

// Only handles circular avatar upload. Banner/cover logic was removed from Settings.
export default function ImageUploader({
  outputWidth = 300,
  outputHeight = 300,
  maxSizeMB = 2,
  value = '',
  onSave,
  onRemove,
  label,
  description,
}) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(value || '');
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [dragActive, setDragActive] = useState(false);

  const handleFileSelect = (file) => {
    setError('');
    if (!file) return;

    if (!ACCEPTED_TYPES.includes(file.type)) {
      setError('Format file harus JPG, PNG, atau WEBP.');
      return;
    }

    if (file.size > maxSizeMB * 1024 * 1024) {
      setError(`Ukuran file melebihi batas ${maxSizeMB}MB.`);
      return;
    }

    setSelectedFile(file);

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = outputWidth;
        canvas.height = outputHeight;
        const ctx = canvas.getContext('2d');

        // Center-crop to the output aspect ratio
        const targetRatio = outputWidth / outputHeight;
        const sourceRatio = img.width / img.height;
        let sx = 0;
        let sy = 0;
        let sw = img.width;
        let sh = img.height;

        if (sourceRatio > targetRatio) {
          sw = img.height * targetRatio;
          sx = (img.width - sw) / 2;
        } else {
          sh = img.width / targetRatio;
          sy = (img.height - sh) / 2;
        }

        ctx.drawImage(img, sx, sy, sw, sh, 0, 0, outputWidth, outputHeight);
        setPreview(canvas.toDataURL('image/jpeg', 0.9));
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => setDragActive(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const handleUpload = () => {
    if (!preview) return;
    setUploading(true);
    setProgress(0);

    // Simulate progress bar. TODO(backend): ganti dengan request upload FormData ke API.
    let p = 0;
    const interval = setInterval(() => {
      p += 20;
      setProgress(p);
      if (p >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          onSave(preview);
          setUploading(false);
          setProgress(0);
          setSelectedFile(null);
        }, 300);
      }
    }, 100);
  };

  const handleRemove = () => {
    if (onRemove) onRemove();
    setPreview('');
    setSelectedFile(null);
  };

  return (
    <div className="space-y-6">
      {error && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm flex items-center gap-2">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Avatar preview */}
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <div className="w-28 h-28 shrink-0 overflow-hidden rounded-full bg-button-gradient shadow-sm ring-2 ring-brand-accent/10">
          {preview ? (
            <img src={preview} alt="Avatar preview" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white text-4xl font-bold">
              {label ? label.charAt(0).toUpperCase() : '?'}
            </div>
          )}
        </div>
        <div className="text-center sm:text-left space-y-1">
          <h4 className="font-semibold text-base">{label}</h4>
          <p className="text-xs opacity-70">{description}</p>
          <p className="text-xs text-brand-accent font-medium">
            Gambar akan otomatis di-crop persegi &amp; di-resize halus.
          </p>
        </div>
      </div>

      {/* Dropzone */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`relative border-2 border-dashed rounded-2xl p-8 text-center transition-all cursor-pointer ${
          dragActive
            ? 'border-brand-accent bg-brand-accent/10'
            : 'border-gray-300/40 hover:border-brand-accent bg-gray-50/60 dark:bg-black/30'
        }`}
      >
        <input
          type="file"
          accept="image/jpeg,image/png,image/webp"
          onChange={(e) => e.target.files && handleFileSelect(e.target.files[0])}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        <div className="flex flex-col items-center justify-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent">
            <UploadCloud className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-semibold">
              <span className="text-brand-accent underline">Pilih file</span> atau seret foto ke sini
            </p>
            {selectedFile && (
              <p className="text-xs text-green-400 font-medium mt-1">
                File terpilih: {selectedFile.name} ({(selectedFile.size / 1024).toFixed(1)} KB)
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Progress */}
      {uploading && (
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-semibold">
            <span>Mengunggah foto...</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full h-2 rounded-full bg-gray-700 overflow-hidden">
            <div
              className="h-full bg-button-gradient transition-all duration-200"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={handleUpload}
          disabled={uploading || !selectedFile}
          className="btn-premium bg-button-gradient text-white px-6 py-2.5 rounded-xl text-sm font-semibold shadow-glow disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {uploading ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin" />
              <span>Proses Upload...</span>
            </>
          ) : (
            <span>Simpan Foto</span>
          )}
        </button>

        {value && (
          <button
            onClick={handleRemove}
            disabled={uploading}
            className="px-4 py-2.5 rounded-xl text-sm font-medium text-red-400 hover:bg-red-500/10 border border-red-500/20 transition-colors flex items-center gap-2"
          >
            <Trash2 className="w-4 h-4" />
            <span>Hapus Foto</span>
          </button>
        )}
      </div>
    </div>
  );
}
