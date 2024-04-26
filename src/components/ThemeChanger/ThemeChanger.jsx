function ThemeChanger(props) {
  function changeTheme() {
    props.setTheme(!props.theme);
  }
  return (
    <div className="theme-changer" onClick={changeTheme}>
      <div
        className={`theme-switcher theme-${props.theme ? "dark" : "light"}`}
      ></div>
    </div>
  );
}
export default ThemeChanger;
