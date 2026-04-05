"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

export function ClarityInit() {
    useEffect(() => {
        Clarity.init("w72f9d1n7u");
    }, []);

    return null;
}