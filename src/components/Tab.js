import React, { useState, useEffect } from 'react'

const Tab = ({ label, onClick, isActive }) => (
    <div
        className={`tab cursor-pointer hover:text-theme-color tab ${isActive ? "active" : ""}`}
        onClick={onClick}
    >
        {label}
    </div>
);

export default Tab
