import React from "react";

export default function Home() {
  return (
    <div className="home">
      <img
        src={process.env.PUBLIC_URL + "logo.png"}
        className="home-logo"
        alt="logo"
      />
      <h2 className="home-title">Task management</h2>
      <input
        className="home-input"
        type="text"
        placeholder="Enter name"
        name="name"
        // value={form.name}
        // onChange={onChangeInput}
      />
      <div class="home-error-alert">*Name cannot be empty</div>
      <button class="home-btn">Submit</button>
    </div>
  );
}
