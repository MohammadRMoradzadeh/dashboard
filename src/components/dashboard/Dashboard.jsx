// src/pages/Dashboard.jsx (or Accounts.jsx) - UPDATED with header code for JS
import React from "react";
import Header from "../header/Header";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  IconButton,
} from "@mui/material";
import {
  CurrencyExchange as CurrencyExchangeIcon,
  AttachMoney as AttachMoneyIcon,
  Receipt as ReceiptIcon,
  Savings as SavingsIcon,
  ChevronRight as ChevronRightIcon,
} from "@mui/icons-material";
import AppleIcon from "@mui/icons-material/Apple";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import CreditCard from "../creditCard/CreditCard";
import { red } from "@mui/material/colors";
import GridCards from "../gridCards/GridCards";
import Transaction from "../transaction/Transaction";
import Debit from "../debit/Debit";
import Invoices from "../invoices/Invoices";

// Dummy Data
const dashboardCards = [
  {
    title: "MyBalance",
    value: "$12,750",
    icon: <CurrencyExchangeIcon />,
    color: "#FFF3E0",
    iconColor: "#ff989b",
  },
  {
    title: "Income",
    value: "$5,600",
    icon: <AttachMoneyIcon />,
    color: "#E0F2F7",
    iconColor: "#386641",
  },
  {
    title: "Expense",
    value: "$3,460",
    icon: <ReceiptIcon />,
    color: "#FCE4EC",
    iconColor: "#ec407a",
  },
  {
    title: "TotalSaving",
    value: "$7,920",
    icon: <SavingsIcon />,
    color: "#E8F5E9",
    iconColor: "#1b5e20",
  },
];

const lastTransactions = [
  {
    id: 1,
    description: "Spotify",
    date: "25 Jan 2021",
    type: "Shopping",
    card: "1234 ****",
    status: "Pending",
    amount: -150,
    color: "#16DBCC",
    bgcolor: "#DCFAF8",
    icon: <AttachMoneyIcon fontSize="medium" />,
    number: "1234 ****",
  },
  {
    id: 2,
    description: "MobileService",
    date: "25 Jan 2021",
    type: "Service",
    card: "1234 ****",
    status: "Completed",
    amount: -340,
    color: "#396AFF",
    bgcolor: "#E7EDFF",
    icon: <ReceiptIcon fontSize="medium" />,
    number: "1234 ****",
  },
  {
    id: 3,
    description: "EmilyWilson",
    date: "25 Jan 2021",
    type: "Transfer",
    card: "1234 ****",
    status: "Completed",
    amount: 780,
    color: "#FF82AC",
    bgcolor: "#FFE0EB",
    icon: <CurrencyExchangeIcon fontSize="medium" />,
    number: "1234 ****",
  },
];

// const invoiceItems = [
//   {
//     id: 1,
//     company: {
//       fa: "اپل استور",
//       en: "Apple Store",
//     },
//     daysAgo: { fa: "5 ساعت پیش", en: "5h ago" },
//     amount: 450,
//     icon: {
//       name: AppleIcon,
//       bg: "#DCFAF8",
//       color: "#16DBCC",
//     },
//   },
//   {
//     id: 2,
//     company: { fa: "مایکل", en: "Michael" },
//     daysAgo: { fa: "2 روز پیش", en: "2 days ago" },
//     amount: 160,
//     icon: {
//       name: PersonOutlinedIcon,
//       bg: "#FFF5D9",
//       color: "#FFBB38",
//     },
//   },
//   {
//     id: 3,
//     company: { fa: "پلی استیشن", en: "Playstation" },
//     daysAgo: { fa: "5 روز پیش", en: "5 days agoo" },
//     amount: 1085,
//     icon: {
//       name: SportsEsportsOutlinedIcon,
//       bg: "#E7EDFF",
//       color: "#396AFF",
//     },
//   },
//   {
//     id: 4,
//     company: "William",
//     company: { fa: "ویلیام", en: "William" },
//     daysAgo: { fa: "10 روز پیش", en: "10 days ago" },
//     amount: 90,
//     icon: {
//       name: PersonOutlinedIcon,
//       bg: "#FFE0EB",
//       color: "#FF82AC",
//     },
//   },
// ];

function Dashboard() {
  const theme = useTheme();
  const {
    t,
    i18n: { language },
  } = useTranslation();
  console.log("first", language);
  return (
    <>
      <Box sx={{ width: 1 }}>
        <Header />
        <GridCards />
        <Box display={"flex"} justifyContent={"center"} columnGap={3} px={5} mt={4}>
          <Transaction />
          <CreditCard />
        </Box>
        <Box display={"flex"} justifyContent={"center"} columnGap={3} px={5} mt={4} mb={4}>
          <Debit />
          <Invoices />
        </Box>
      </Box>
    </>
  );
}

export default Dashboard;
