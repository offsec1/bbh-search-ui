import React from "react";
import {ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";

export default function MenuList() {
    return (
        <div>
            <ListItem button>
                <ListItemIcon>
                    <DashboardIcon/>
                </ListItemIcon>
                <ListItemText primary="Dashboard"/>
            </ListItem>
        </div>
    )
}