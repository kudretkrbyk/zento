import { useState, useEffect, useRef } from "react";
import { SketchPicker } from "react-color"; // react-color kütüphanesi
import { IoSettings } from "react-icons/io5";

export default function SettingsPanel() {
  const [colors, setColors] = useState({});
  const [visiblePicker, setVisiblePicker] = useState(null); // Hangi picker açık?
  const panelRef = useRef(null);

  const handleColorChange = (color, key) => {
    setColors((prevColors) => ({
      ...prevColors,
      [key]: color.hex, // Yeni renk güncellemesi
    }));

    // CSS değişkenlerini güncelle
    document.documentElement.style.setProperty(
      `--${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`,
      color.hex
    );
  };

  const handleClickOutside = (event) => {
    if (panelRef.current && !panelRef.current.contains(event.target)) {
      setVisiblePicker(null); // Dışarı tıklanınca picker'ı kapat
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="settings-panel fixed top-1/3 left-0 flex items-center justify-center z-40 group/main"
      ref={panelRef}
    >
      <div className="z-40 settings-menu w-0 h-full group-hover/main:w-80 group-hover/main:p-4 duration-1000 bg-white text-nowrap shadow overflow-hidden">
        {/* Accent Color */}
        <div className="group/setting">
          <p
            className="cursor-pointer-setting"
            onClick={() =>
              setVisiblePicker(
                visiblePicker === "accentColor" ? null : "accentColor"
              )
            }
          >
            Accent Color
          </p>
          {visiblePicker === "accentColor" && (
            <div className="absolute z-50 top-10 left-5">
              <SketchPicker
                className="custom-sketch-picker"
                color={colors.accentColor}
                onChangeComplete={(color) =>
                  handleColorChange(color, "accentColor")
                }
              />
            </div>
          )}
        </div>

        {/* Background Color */}
        <div className="group/setting mt-4">
          <p
            className="cursor-pointer"
            onClick={() =>
              setVisiblePicker(
                visiblePicker === "backgroundColor" ? null : "backgroundColor"
              )
            }
          >
            Background Color
          </p>
          {visiblePicker === "backgroundColor" && (
            <div className="absolute z-50 top-16 left-5">
              <SketchPicker
                className="custom-sketch-picker"
                color={colors.backgroundColor}
                onChangeComplete={(color) =>
                  handleColorChange(color, "backgroundColor")
                }
              />
            </div>
          )}
        </div>

        {/* Decoration Color */}
        <div className="group/setting mt-4">
          <p
            className="cursor-pointer"
            onClick={() =>
              setVisiblePicker(
                visiblePicker === "decorationColor" ? null : "decorationColor"
              )
            }
          >
            Decoration Color
          </p>
          {visiblePicker === "decorationColor" && (
            <div className="absolute z-50 top-24 left-5">
              <SketchPicker
                className="custom-sketch-picker"
                color={colors.decorationColor}
                onChangeComplete={(color) =>
                  handleColorChange(color, "decorationColor")
                }
              />
            </div>
          )}
        </div>
      </div>

      {/* Settings Icon */}
      <div
        className={` bg-white flex items-center justify-end w-20 h-20 p-4  z-30`}
      >
        <IoSettings className="size-10 group-hover/main:rotate-180 duration-1000" />
      </div>
    </div>
  );
}
