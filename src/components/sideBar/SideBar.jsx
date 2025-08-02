// src/components/Sidebar.tsx
import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Avatar,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  AttachMoney as TransactionsIcon,
  AccountBalanceWallet as AccountsIcon,
  MonetizationOn as InvestmentsIcon,
  CreditCard as CreditCardsIcon,
  LocalAtm as LoansIcon,
  Build as ServicesIcon,
  Star as MyPrivilegesIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";

import { useTranslation } from "react-i18next";

const drawerWidth = 320;
import { useTheme } from "@mui/material/styles";
const menuItems = [
  { text: "Dashboard", icon: <DashboardIcon />, link: "/dashboard" },
  { text: "Transactions", icon: <TransactionsIcon />, link: "/transactions" },
  { text: "Accounts", icon: <AccountsIcon />, link: "/accounts" },
  { text: "Investments", icon: <InvestmentsIcon />, link: "/investments" },
  { text: "CreditCards", icon: <CreditCardsIcon />, link: "/credit-cards" },
  { text: "Loans", icon: <LoansIcon />, link: "/loans" },
  { text: "Services", icon: <ServicesIcon />, link: "/services" },
  { text: "MyPrivileges", icon: <MyPrivilegesIcon />, link: "/privileges" },
  { text: "Setting", icon: <SettingsIcon />, link: "/settings" },
];

function Sidebar() {
  const theme = useTheme();

  const {
    i18n: { language, dir },
    t,
  } = useTranslation();
  const isRTL = language === "fa";

  return (
    <>
      <Box
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          display: "flex", // اضافه شد
          flexDirection: "column", // اضافه شد
          backgroundColor:
            theme.palette.mode === "dark" ? "#212529" : "#FFFFFF",
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            borderRight: "none",
            backgroundColor:
              theme.palette.mode === "dark" ? "#0080ffff" : "#FFFFFF",
          },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            py: 2,
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ fontWeight: "bold", color: "#212529" }}
          >
            BankDash.
          </Typography>
        </Toolbar>

        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                dir={dir}
                sx={{
                  paddingX: "24px",
                  fontWeight: "bold",
                  fontSize: "24px",
                  "&.Mui-selected": {
                    borderRadius: "4px",
                    borderLeft: isRTL ? "" : "6px solid #465fff",
                    borderRight: isRTL ? "6px solid #465fff" : "",
                    background: "none",
                    "& .MuiListItemIcon-root": {
                      color: "#465fff",
                    },
                  },
                  "&:hover": {
                    backgroundColor:
                      theme.palette.mode === "dark" ? "#e3f2fd" : "#f8f9fa",
                    color:
                      theme.palette.mode === "dark" ? "#465fff" : "#495057",
                  },
                }}
                selected={item.text === "Accounts"}
              >
                <ListItemIcon
                  sx={{ minWidth: 40, color: "#9E9E9E", fontSize: "32px" }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={t(item.text)}
                  sx={{
                    fontSize: "32px",
                    "& .MuiTypography-root": { fontWeight: 500 },
                    textAlign: isRTL ? "right" : "left",
                    fontSize: "32px",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        {/* این بخش میره پایین */}
        <Box display={"flex"} sx={{ mt: "auto", px: 2, py: 2 }} justifyContent={"center" } alignItems={"center"} columnGap={1} >
          <Box width={64} height={64} bgcolor={"#d38282ff"} borderRadius={50}></Box>
          <Box display={"flex"} flexDirection={"column"}>
            <Typography fontSize={24} color="#444444ff" fontWeight={"bold"}>نام و نام خانوادگی</Typography>
            <Typography fontSize={24} color="#444444ff" >name@gmail.com</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Sidebar;
