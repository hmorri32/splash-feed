import React from "react";
import "./StyleGuide.css";

export const StyleGuide = () => {
  return (
    <div className="style-container">
      <h1 className="type-header">Typography</h1>
      <h2 className="open-sans">Open Sans</h2>
      <p className="characters">
        A B C Č Ć D Đ E F G H I J K L M N O P Q R S Š T U V W X Y Z Ž a b c č ć
        d đ e f g h i j k l m n o p q r s š t u v w x y z ž А Б В Г Ґ Д Ђ Е Ё Є
        Ж З Ѕ И І Ї Й Ј К Л Љ М Н Њ О П Р С Т Ћ У Ў Ф Х Ц Ч Џ Ш Щ Ъ Ы Ь Э Ю Я а
        б в г ґ д ђ е ё є ж з ѕ и і ї й ј к л љ м н њ о п р с т ћ у ў ф х ц ч џ
        ш щ ъ ы ь э ю я Α Β Γ Δ Ε Ζ Η Θ Ι Κ Λ Μ Ν Ξ Ο Π Ρ Σ Τ Υ Φ Χ Ψ Ω α β γ δ
        ε ζ η θ ι κ λ μ ν ξ ο π ρ σ τ υ φ χ ψ ω ά Ά έ Έ έ Ή ί ϊ ΐ Ί ό Ό ύ ΰ ϋ Ύ
        Ϋ Ώ Ă Â Ê Ô Ơ Ư ă â ê ô ơ ư 1 2 3 4 5 6 7 8 9 0 ‘ ? ’ “ ! ” ( % ) [ # ]
        / & \ + ÷ × = > ® © $ € £ ¥ ¢ : ; , . *
      </p>
      <p className="type regular">Regular</p>
      <p className="type regular-italic">Regular Italic</p>
      <p className="type semi-bold">Semi-Bold</p>
      <p className="type semi-bold-italic">Semi-Bold Italic</p>
      <p className="type bold">Bold</p>
      <p className="type bold-italic">Bold Italic</p>
      <h1 className="palette-header type-header">Palette</h1>
      <div className="palette">
        <div className="color one">
          <p className="color-name">Black</p>
          <p>#000000</p>
        </div>
        <div className="color two">
          <p className="color-name">Vivid Crimson</p>
          <p>#3f67d4</p>
        </div>
        <div className="color three">
          <p className="color-name">Dodger Blue</p>
          <p>#2f80ed</p>
        </div>
        <div className="color four">
          <p className="color-name">Summer Sky</p>
          <p>#33adff</p>
        </div>
        <div className="color five">
          <p className="color-name">Pale Cyan</p>
          <p>#8eb7ed</p>
        </div>
        <div className="color six">
          <p className="color-name">Periwinkle-ish</p>
          <p>#c1d9fa</p>
        </div>
      </div>
      <div className="buttons">
        <h1 className="type-header">Buttons</h1>
        <button className="button icon"><img src="" alt=""/> Click Me</button>
        <button className="button text">Click Me</button>
        <button className="button hover-focus">Click Me</button>
        <button className="button active">Click Me</button>
        <button className="button disabled">Click Me</button>
        <button className="button loader"><img src="" alt=""/></button>
      </div>
    </div>
  );
};
