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

const invoiceItems = [
  {
    id: 1,
    company: {
      fa: "اپل استور",
      en: "Apple Store",
    },
    daysAgo: { fa: "5 ساعت پیش", en: "5h ago" },
    amount: 450,
    icon: {
      name: AppleIcon,
      bg: "#DCFAF8",
      color: "#16DBCC",
    },
  },
  {
    id: 2,
    company: { fa: "مایکل", en: "Michael" },
    daysAgo: { fa: "2 روز پیش", en: "2 days ago" },
    amount: 160,
    icon: {
      name: PersonOutlinedIcon,
      bg: "#FFF5D9",
      color: "#FFBB38",
    },
  },
  {
    id: 3,
    company: { fa: "پلی استیشن", en: "Playstation" },
    daysAgo: { fa: "5 روز پیش", en: "5 days agoo" },
    amount: 1085,
    icon: {
      name: SportsEsportsOutlinedIcon,
      bg: "#E7EDFF",
      color: "#396AFF",
    },
  },
  {
    id: 4,
    company: "William",
    company: { fa: "ویلیام", en: "William" },
    daysAgo: { fa: "10 روز پیش", en: "10 days ago" },
    amount: 90,
    icon: {
      name: PersonOutlinedIcon,
      bg: "#FFE0EB",
      color: "#FF82AC",
    },
  },
];

function Dashboard() {
  const theme = useTheme();
  const {
    t,
    i18n: { language },
  } = useTranslation();
  console.log("first", language);
  return (
    <Box
      container
      sx={{
        height: "100vh",
        backgroundColor: theme.palette.mode === "dark" ? "#343a40" : "#f8f9fa",
      }}
    >
      {/* Header Section */}
      <Header />
      {/* Rest of the Dashboard content (same as before) */}
      {/* Top Cards */}
      <Grid container justifyContent="space-around" size={12} mb={4}>
        {dashboardCards.map((card) => (
          <Grid
            item
            size={2.5}
            justifyContent={"space-around"}
            key={t(card.title)}
          >
            <Paper
              elevation={0}
              sx={{
                p: 3,
                display: "flex",
                alignItems: "center",
                borderRadius: 2,
                backgroundColor:
                  theme.palette.mode === "dark" ? "#212529" : "#ffffff",
                boxShadow:
                  theme.palette.mode === "dark"
                    ? "0px 2px 4px rgba(70, 95, 255, 0.3)"
                    : "0px 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Box
                sx={{
                  backgroundColor: card.color,
                  color: card.iconColor,
                  p: 1.5,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mr: 2,
                }}
              >
                {card.icon}
              </Box>
              <Box>
                <Typography
                  sx={{ fontWeight: "bold" }}
                  variant="body2"
                  color="text.secondary"
                >
                  {t(card.title)}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {card.value}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Grid container justifyContent={"space-around"} size={12}>
        {/* Left Column: Last Transaction & Debit & Credit Overview */}
        <Grid item size={7}>
          <Box container display={"flex"} flexDirection={"column"}>
            <Typography
              variant="h5"
              fontWeight={"bold"}
              color="text.secondary"
              sx={{ mb: 2 }}
            >
              {t("LastTransaction")}
            </Typography>
            <Box
              flexGrow={1}
              sx={{
                px: 4,
                borderRadius: 4,
                backgroundColor:
                  theme.palette.mode === "dark" ? "#212529" : "#ffffffff",
                boxShadow:
                  theme.palette.mode === "dark"
                    ? "0px 2px 4px rgba(70, 95, 255, 0.3)"
                    : "0px 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Grid container spacing={2}>
                {lastTransactions.map((item) => {
                  {
                    return (
                      <Grid
                        size={12}
                        display={"flex"}
                        gap={12}
                        justifyContent={"space-around"}
                        alignItems={"center"}
                        marginY={4}
                      >
                        <Box
                          width={64}
                          height={64}
                          color={item.color}
                          backgroundColor={item.bgcolor}
                          sx={{
                            borderRadius: "15px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {item.icon}
                        </Box>
                        <Box display={"flex"} flexDirection={"column"}>
                          <Typography
                            variant="body2"
                            sx={{ fontSize: "18px", mb: 1.5 }}
                          >
                            {t(item.description)}
                          </Typography>
                          <Typography variant="body2" color="#718EBF">
                            {item.date}
                          </Typography>
                        </Box>
                        <Typography
                          variant="body2"
                          fontWeight={"bold"}
                          color="#718EBF"
                        >
                          {t(item.type)}
                        </Typography>
                        <Typography
                          variant="body2"
                          fontWeight={"bold"}
                          color="#718EBF"
                        >
                          {t(item.account)}
                        </Typography>
                        <Typography
                          variant="body2"
                          fontWeight={"bold"}
                          color="#718EBF"
                        >
                          {item.number}
                        </Typography>
                        <Typography
                          variant="body2"
                          fontWeight={"bold"}
                          color="#718EBF"
                        >
                          {t(item.status)}
                        </Typography>
                        <Typography
                          fontSize={17}
                          variant="body2"
                          fontWeight={"bold"}
                          sx={{
                            color: item.amount < 0 ? "#FE5C73" : "#16DBAA",
                          }}
                        >
                          {item.amount}
                        </Typography>
                      </Grid>
                    );
                  }
                })}
              </Grid>
            </Box>
          </Box>
          <Box
            container
            display={"flex"}
            mt={4}
            flexDirection={"column"}
            sx={{
              px: "12px",
              py: "8px",
              borderRadius: "18px",
              backgroundColor:
                theme.palette.mode === "dark" ? "#212529" : "#ffffffff",
              boxShadow:
                theme.palette.mode === "dark"
                  ? "0px 2px 4px rgba(70, 95, 255, 0.3)"
                  : "0px 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography
              variant="h5"
              fontWeight={"bold"}
              color="text.secondary"
              mb={2}
            >
               {language === "fa" ? "برسی اجمالی بدهی و اعتبار" : "Debit & Credit Overview"}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Typography
                component="span"
                sx={{ color: "success.main", fontWeight: "bold" }}
              >
                $4,670
              </Typography>{" "}
              Debited &
              <Typography
                component="span"
                sx={{ color: "primary.main", fontWeight: "bold" }}
              >
                {" "}
                $5,670
              </Typography>{" "}
              Credited in this Week
            </Typography>
            <Box
              sx={{
                height: 200,
                display: "flex",
                justifyContent: "space-around",
                alignItems: "flex-end",
                gap: 1,
                backgroundColor:
                  theme.palette.mode === "dark" ? "#212529" : "#ffffffff",
              }}
            >
              {Array.from({ length: 12 }).map((_, i) => (
                <Box
                  key={i}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    height: "100%",
                    justifyContent: "flex-end",
                    width: "10%",
                  }}
                >
                  <Box
                    sx={{
                      height: `${Math.random() * 70 + 30}%`, 
                      width: "80%",
                      backgroundColor: i % 2 === 0 ? "#FCAA0B" : "#1A16F3",
                      borderTopLeftRadius: 24,
                      borderTopRightRadius: 24,
                    }}
                  />
                  <Typography variant="caption" color="text.secondary" mt={0.5}>
                    {
                      [
                        "Sat",
                        "Sun",
                        "Mon",
                        "Tue",
                        "Wed",
                        "Thu",
                        "Fri",
                        "Sat",
                        "Sun",
                        "Mon",
                        "Tue",
                        "Wed",
                      ][i]
                    }
                  </Typography>
                </Box>
              ))}
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "center", mt: 2, gap: 3 }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    backgroundColor: "#072ac8",
                    mx: 1,
                  }}
                />
                <Typography variant="caption"> {language === "fa" ? "بدهی" : "Debit"}</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    backgroundColor: "#ff6700",
                    mx: 1,
                  }}
                />
                <Typography variant="caption"> {language === "fa" ? "اعتبار" : "Credit"}</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        {/* Right Column: My Card & Invoices Sent */}
        <Grid item size={3}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              variant="h5"
              fontWeight={"bold"}
              color="text.secondary"
              sx={{ mb: 2 }}
            >
              {language === "fa" ? "کارت من" : "My Card"}
            </Typography>
            <Button
              color="text.secondary"
              sx={{
                fontWeight: "800",
                fontSize: "14px",
                "&:hover": {
                  backgroundColor:
                    theme.palette.mode === "dark" ? "#343a40" : "#f8f9fa",
                },
              }}
            >
              {language === "fa" ? "مشاهده همه" : "see All"}
            </Button>
          </Box>
          <Box
            elevation={0}
            sx={{
              height: 220,
              borderRadius: 6,
              mb: 3,
            }}
          >
            {/* My Card Component */}
            <Box
              sx={{
                background: "linear-gradient(45deg, #64B5F6 30%, #2196F3 90%)", // Blue gradient
                color: "#fff",
                p: 3,
                borderRadius: 6,
                minHeight: 180,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0px 8px 25px rgba(33, 150, 243, 0.3)",
                width: "100%",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <Typography variant="subtitle2" fontSize={24} fontWeight={600}>
                  {language === "fa" ? "تعادل" : "Balance"}
                </Typography>
                <IconButton sx={{ color: "#fff", p: 0 }}>
                  <img
                    src="https://img.icons8.com/color/48/000000/sim-card-chip.png"
                    alt="chip"
                    style={{ width: 64, height: 64 }}
                  />
                </IconButton>
              </Box>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                
                 {language === "fa" ? "5,756 ت" : "$5,756"}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography variant="caption" fontSize={18}  color="rgba(255,255,255,1)">
                     {language === "fa" ? "دارنده کارت" : "CARD HOLDER"}
                  </Typography>
                  <Typography variant="body2" fontSize={20}> {language === "fa" ? "علی زارع" : "Ali Zare"}</Typography>
                </Box>
                <Box sx={{ textAlign: "right" }}>
                  <Typography fontSize={18} variant="caption" color="rgba(255,255,255,1)">
                  {language === "fa" ? "تاریخ انقضا" : "VALID THRU"}
                  </Typography>
                  <Typography variant="body2">12/22</Typography>
                </Box>
              </Box>
              <Typography variant="h6" sx={{ letterSpacing: 2, mt: 1 }}>
                3778 **** **** 1234
              </Typography>
            </Box>
          </Box>
          <Paper elevation={0} sx={{ backgroundColor: "transparent" }}>
            <Typography
              variant="h5"
              fontWeight={"bold"}
              color="text.secondary"
              sx={{ mb: 2, backgroundColor: "transparent" }}
            >
              {language === "fa" ? "فاکتور های ارسال شده" : "Invoices Sent"}
            </Typography>
            <Box
              sx={{
                p: 3,
                borderRadius: 2,
                backgroundColor:
                  theme.palette.mode === "dark" ? "#212529" : "#FFFFFF",
                boxShadow:
                  theme.palette.mode === "dark"
                    ? "0px 2px 4px rgba(70, 95, 255, 0.3)"
                    : "0px 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              {invoiceItems.map((invoice) => (
                <React.Fragment key={invoice.id}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      py: 1.5,
                      columnGap: "12px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: 64,
                        height: 64,
                        mr: 2,
                        backgroundColor: "#E0E0E0",
                        borderRadius: "16px",
                        background: invoice.icon.bg,
                      }}
                    >
                      <invoice.icon.name
                        sx={{ color: invoice.icon.color, fontSize: " 36px" }}
                      />
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: 500,
                          color: "#B1B1B1",
                          fontSize: "18px",
                        }}
                      >
                        {language === "fa"
                          ? invoice.company.fa
                          : invoice.company.en}
                      </Typography>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ color: "#718EBF", fontSize: "16px" }}
                      >
                        {language === "fa"
                          ? invoice.daysAgo.fa
                          : invoice.daysAgo.en}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: "bold", color: "#718EBF" }}
                    >
                      {language === "fa" ? "ت" : "$"}
                      {invoice.amount}
                    </Typography>
                  </Box>
                </React.Fragment>
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
