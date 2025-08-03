import React from "react";
import { Box, Typography } from "@mui/material";

import {
  CurrencyExchange as CurrencyExchangeIcon,
  AttachMoney as AttachMoneyIcon,
  Receipt as ReceiptIcon,
} from "@mui/icons-material";

import { useTheme } from "@mui/material/styles";

import { useTranslation } from "react-i18next";

const Transaction = () => {
  const {
    i18n: { language },
  } = useTranslation();
  const theme = useTheme();
  const lastTransactions = [
    {
      id: 1,
      description: {
        en: "Spotify",
        fa: "اشتراک Spotify",
      },
      date: {
        en: "25 Jan 2021",
        fa: "4 مهر 1402",
      },
      type: {
        en: "Shopping",
        fa: "خرید",
      },
      card: "1234 ****",
      status: {
        en: "Pending",
        fa: "در انتظار",
      },
      amount: -150,
      color: "#16DBCC",
      bgcolor: "#DCFAF8",
      icon: <AttachMoneyIcon fontSize="large" />,
      number: "1234 ****",
    },
    {
      id: 2,
      description: {
        en: "MobileService",
        fa: "سرویس موبایل",
      },
      date: {
        en: "25 Jan 2021",
        fa: "4 مهر 1402",
      },
      type: {
        en: "Service",
        fa: "خدمات",
      },
      card: "1234 ****",
      status: {
        en: "Completed",
        fa: "تکمیل شد",
      },
      amount: -340,
      color: "#396AFF",
      bgcolor: "#E7EDFF",
      icon: <ReceiptIcon fontSize="medium" />,
      number: "1234 ****",
    },
    {
      id: 3,
      description: {
        en: "EmilyWilson",
        fa: "امیلی ویلسون",
      },
      date: {
        en: "25 Jan 2021",
        fa: "4 مهر 1402",
      },
      type: {
        en: "Transfer",
        fa: "انتقال",
      },
      card: "1234 ****",
      status: {
        en: "Completed",
        fa: "تکمیل شد",
      },
      amount: 780,
      color: "#FF82AC",
      bgcolor: "#FFE0EB",
      icon: <CurrencyExchangeIcon fontSize="medium" />,
      number: "1234 ****",
    },
  ];
  return (
    <Box display={"flex"} flexDirection={"column"} rowGap={2}>
      <Typography
        variant="h4"
        fontWeight={"bold"}
        px={1}
        color={theme.palette.mode === "dark" ? "white" : "#333B69"}
      >
        {language === "fa" ? "آخرین معامله" : "Last Transaction"}
      </Typography>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        py={3}
        sx={{
          width: 1030,
          height: 285,
          borderRadius: "32px",
          backgroundColor: theme.palette.mode === "dark" ? "#212529" : "white",
        }}
      >
        {lastTransactions.map((item) => {
          return (
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              textAlign={"center"}
              px={4}
            >
              <Box
                width={64}
                height={64}
                bgcolor={item.bgcolor}
                borderRadius={5}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                color={item.color}
              >
                {item.icon}
              </Box>
              <Box textAlign={"start"}>
                <Typography fontWeight={"bold"} variant="body1">
                  {language === "fa"
                    ? item.description.fa
                    : item.description.en}
                </Typography>
                <Typography variant="body1" color="#728FC0">
                  {language === "fa" ? item.date.fa : item.date.en}
                </Typography>
              </Box>
              <Typography color="#728FC0">
                {language === "fa" ? item.type.fa : item.type.en}
              </Typography>
              <Typography color="#728FC0">{item.number}</Typography>
              <Typography color="#728FC0">
                {language === "fa" ? item.status.fa : item.status.en}
              </Typography>
              <Typography
                fontWeight={"bold"}
                color={item.amount >= 0 ? "#16DBAA" : "#FE5C73"}
              >
                {language === "fa" ? "" : "$"}
                {item.amount} {language === "fa" ? "تومان" : ""}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Transaction;
