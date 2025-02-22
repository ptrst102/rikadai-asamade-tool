import { useState } from "react";
import { randomThemesMoji, randomThemesType } from "./data/themes1";
import { randomThemes2 } from "./data/thmes2";

type Mode = "display" | "input";

const App = () => {
  const [mode, setMode] = useState<Mode>("display");

  const [theme1, setTheme1] = useState<string>("でんきタイプの");
  const [theme2, setTheme2] = useState<string>("物理受けといえば？");

  const [theme1Source, setTheme1Source] = useState<"type" | "moji">("type");

  const handleRandomTheme1 = () => {
    if (theme1Source === "type") {
      const randomIndex = Math.floor(Math.random() * randomThemesType.length);
      setTheme1(randomThemesType[randomIndex]);
    } else {
      const randomIndex = Math.floor(Math.random() * randomThemesMoji.length);
      setTheme1(randomThemesMoji[randomIndex]);
    }
  };

  const handleRandomTheme2 = () => {
    const randomIndex = Math.floor(Math.random() * randomThemes2.length);
    setTheme2(randomThemes2[randomIndex]);
  };

  if (mode === "display") {
    return (
      <div className="relative h-screen">
        <div className="flex items-center justify-center h-full">
          <h1 className="text-8xl font-bold text-center">
            {theme1}
            <br />
            {theme2}
          </h1>
        </div>
        <div className="absolute bottom-4 left-0 right-0 text-center">
          <button className="btn btn-outline" onClick={() => setMode("input")}>
            テーマ入力モードに切り替え
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-6 p-4">
      <div className="form-control max-w-md w-full">
        <label className="label">
          <span className="label-text">テーマ1</span>
        </label>
        <div className="flex space-x-2">
          <input
            type="text"
            value={theme1}
            onChange={(e) => setTheme1(e.target.value)}
            className="input input-bordered flex-grow"
            placeholder="例: でんきタイプの"
          />
          <button className="btn btn-outline" onClick={handleRandomTheme1}>
            ランダム
          </button>
        </div>

        <div className="mt-2">
          <select
            value={theme1Source}
            onChange={(e) => setTheme1Source(e.target.value as "type" | "moji")}
            className="select select-bordered w-full"
          >
            <option value="type">タイプ</option>
            <option value="moji">ひらがな</option>
          </select>
        </div>
      </div>

      <div className="form-control max-w-md w-full">
        <label className="label">
          <span className="label-text">テーマ2</span>
        </label>
        <div className="flex space-x-2">
          <input
            type="text"
            value={theme2}
            onChange={(e) => setTheme2(e.target.value)}
            className="input input-bordered flex-grow"
            placeholder="例: 物理受けといえば？"
          />
          <button className="btn btn-outline" onClick={handleRandomTheme2}>
            ランダムお題
          </button>
        </div>
      </div>

      <div className="absolute bottom-4 left-0 right-0 text-center">
        <button className="btn btn-outline" onClick={() => setMode("display")}>
          スクリーン表示モードに切り替え
        </button>
      </div>
    </div>
  );
};

export default App;
