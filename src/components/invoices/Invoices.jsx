import React from "react";
import { Box, Typography } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

const Invoices = () => {
  const theme = useTheme();
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
  const {
    i18n: { language },
  } = useTranslation();
  return (
    <Box display={"flex"} flexDirection={"column"} rowGap={2}>
      <Typography
        variant="h4"
        fontWeight={"bold"}
        px={1}
        color={theme.palette.mode === "dark" ? "white" : "#333B69"}
      >
        {language === "fa" ? "فاکتور های ارسال شده" : "Invoices Sent"}
      </Typography>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        py={1}
        sx={{
          width: 460,
          height: 400,
          borderRadius: "32px",
          backgroundColor: theme.palette.mode === "dark" ? "#212529" : "white",
        }}
      >
        {invoiceItems.map((item) => {
          return (
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              px={3}
              py={2}
            >
              <Box display={"flex"} alignItems={"center"} columnGap={3}>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  width={64}
                  height={64}
                  bgcolor={item.icon.bg}
                  color={item.icon.color}
                  borderRadius={2}
                >
                  <item.icon.name fontSize="large" />
                </Box>
                <Box display={"flex"} flexDirection={"column"}>
                  <Typography variant="h6" fontWeight={"bold"} color="#333B69">
                    {language === "fa" ? item.company.fa : item.company.en}
                  </Typography>
                  <Typography
                    fontWeight={"medium"}
                    variant="body2"
                    color="#718EBF"
                  >
                    {language === "fa" ? item.daysAgo.fa : item.daysAgo.en}
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Typography color="#718EBF">
                  {language === "fa" ? "" : "$"}
                  {item.amount}
                  {language === "fa" ? "تومان" : ""}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Invoices;
