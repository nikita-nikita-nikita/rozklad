import React from "react";
import "./navbarStyles.scss";
import {Route} from "react-router-dom";
import MonthSlider from "./MonthSlider";
import WeekSlider from "./WeekSlider";
import NavbarProfileDropDown from "./NavbarProfileDropDown";
import PuzzleIcon from "../puzzleIcon";

const TimetableNavbar:React.FC = () => (
  <>
    <MonthSlider/>
    <button className='header__navbar-btn'>
      <PuzzleIcon className="header__navbar-icon"/>
      Add
    </button>
  </>
);
const TableviewNavbar:React.FC = () => (
  <>
    <WeekSlider/>
    <div/>
  </>
);

const Navbar: React.FC = () => (
    <nav className="header__navbar">
      <Route path="/timetable" component={TimetableNavbar}/>
      <Route path="/tableview" component={TableviewNavbar}/>
      <NavbarProfileDropDown/>
    </nav>
  )


export default Navbar;
