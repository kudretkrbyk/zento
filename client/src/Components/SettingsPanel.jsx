import { useState } from "react";
import { SketchPicker } from "react-color"; // react-color kütüphanesi
import { IoSettings } from "react-icons/io5";

export default function SettingsPanel() {
  const [colors, setColors] = useState({});

  const handleColorChange = (color, key) => {
    setColors((prevColors) => ({
      ...prevColors,
      [key]: color.hex, // Yeni renk güncellemesi
    }));

    // CSS değişkenlerini güncelle
    document.documentElement.style.setProperty(`--${key}`, color.hex);
  };

  return (
    <div className="settings-panel fixed top-1/2 left-0 flex items-center justify-center z-40 group">
      {" "}
      <div className="settings-menu w-0 h-60 group-hover:w-40  group-hover:p-4 duration-1000 overflow-hidden bg-blue-500  text-nowrap border rounded">
        <div>
          <p>Accent Color</p>
          <SketchPicker
            className="hidden"
            color={colors.accentColor}
            onChangeComplete={(color) =>
              handleColorChange(color, "accentColor")
            }
          />
        </div>
        <div>
          <p>Decoration Color</p>
          <SketchPicker
            className="hidden"
            color={colors.decorationColor}
            onChangeComplete={(color) =>
              handleColorChange(color, "decorationColor")
            }
          />
        </div>
      </div>
      <div
        className={`settings-icon bg-yellow-200 flex items-center justify-end   w-20 h-20 p-4 border rounded 
         
        }`}
      >
        <IoSettings className="size-10 group-hover:rotate-180 duration-1000" />
      </div>
    </div>
  );
}
