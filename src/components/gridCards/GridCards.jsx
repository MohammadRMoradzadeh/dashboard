import { Grid, Box, Typography } from "@mui/material";
import {
  CurrencyExchange as CurrencyExchangeIcon,
  AttachMoney as AttachMoneyIcon,
  Receipt as ReceiptIcon,
  Savings as SavingsIcon,
} from "@mui/icons-material";
import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

function GridCards() {
  const dashboardCards = [
    {
      title: {
        en: "MyBalance",
        fa: "موجودی من",
      },
      value: "12,750",
      icon: CurrencyExchangeIcon,
      color: "#FFF3E0",
      iconColor: "#ff989b",
    },
    {
      title: {
        en: "Income",
        fa: "درآمد",
      },
      value: "5,600",
      icon: AttachMoneyIcon,
      color: "#E0F2F7",
      iconColor: "#386641",
    },
    {
      title: {
        en: "Expense",
        fa: "هزینه",
      },
      value: "3,460",
      icon: ReceiptIcon,
      color: "#FCE4EC",
      iconColor: "#ec407a",
    },
    {
      title: {
        en: "TotalSaving",
        fa: "پس انداز",
      },
      value: "7,920",
      icon: SavingsIcon,
      color: "#E8F5E9",
      iconColor: "#1b5e20",
    },
  ];

  const {
    i18n: { language },
  } = useTranslation();
  // const isRTL = language === "fa";

  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        justifyContent: "center",
      }}
    >
      {dashboardCards.map((item) => (
        <Box
          key={item.title}
          sx={{
            flexBasis: {
              xs: "100%", // موبایل: تمام عرض
              sm: "48%", // تبلت: نصف عرض
              md: "23%", // دسکتاپ: حدود یک‌چهارم عرض
            },
            backgroundColor:
              theme.palette.mode === "dark" ? "#212529" : "white",
            height: "160px",
            borderRadius: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 3,
            p: 2,
          }}
        >
          <Box
            sx={{
              width: 72,
              height: 72,
              backgroundColor: item.color,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <item.icon sx={{ color: item.iconColor, fontSize: "2.5rem" }} />
          </Box>
          <Box>
            <Typography variant="h6" sx={{ color: "#718EBF" }}>
              {language === "fa" ? item.title.fa : item.title.en}
            </Typography>
            <Typography variant="h4">
              {language !== "fa" ? "$" : ""}
              {item.value}
              {language === "fa" ? "تومان" : ""}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default GridCards;
