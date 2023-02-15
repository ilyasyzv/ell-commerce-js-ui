import {FC} from "react";
import {Button} from "@storybook/react/demo";
import React from "react";
import {changeLanguage} from "../commons/functions";

export const LanguageSelector: FC = ()=> {
    return <>
        <Button
            onClick={()=> { changeLanguage("en")} }>EN
        </Button>
        <Button
            onClick={()=> { changeLanguage("jp")} }>JP
        </Button>
        <Button
            onClick={()=> { changeLanguage("ko")} }>KO
        </Button>

    </>
}