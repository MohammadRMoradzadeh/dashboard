import React from "react";
import { Box, Typography } from "@mui/material";

import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

const Debit = () => {
  const theme = useTheme();
  const days = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
  const faDays = [
    "شنبه",
    "یک شنبه",
    "دوشنبه",
    "سه شنبه",
    "چهارشنبه",
    "پنج شنبه",
    "جمعه",
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
        {language === "fa"
          ? "برسی اجمالی بدهی و اعتبار"
          : "Debit & Credit Overview"}
      </Typography>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        py={1}
        sx={{
          width: 1030,
          height: 400,
          borderRadius: "32px",
          backgroundColor: theme.palette.mode === "dark" ? "#212529" : "white",
        }}
      >
        <Box display={"flex"} justifyContent={"space-between"} px={3}>
          <Box>
            <Typography variant="h6" color="#718EBF">
              {language === "fa"
                ? "7560 دلار بدهکار و 5438 دلار بستانکار در این هفته"
                : " $7,560 Debited $5,420 Credited in this week"}
            </Typography>
          </Box>
          <Box display={"flex"} columnGap={3} color="#718EBF">
            <Box display={"flex"} alignItems={"center"} columnGap={1}>
              <Box
                width={18}
                height={18}
                bgcolor={"#3E68E2"}
                borderRadius={1}
              ></Box>
              <Typography>{language === "fa" ? "بدهی" : "Debit"}</Typography>
            </Box>
            <Box display={"flex"} alignItems={"center"} columnGap={1}>
              <Box
                width={18}
                height={18}
                bgcolor={"#EC679D"}
                borderRadius={1}
              ></Box>
              <Typography>
                <Typography>
                  {language === "fa" ? "اعتبار" : "Credit"}
                </Typography>
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box display={"flex"} justifyContent={"space-around"}>
          {language === "fa"
            ? null
            : days.map((item) => {
                return (
                  <Box>
                    <Box display={"flex"} alignItems={"end"} columnGap={2}>
                      <Box
                        width={32}
                        height={127}
                        bgcolor={"#FCAA0B"}
                        borderRadius={2}
                      ></Box>
                      <Box
                        width={32}
                        height={211}
                        bgcolor={"#1A16F3"}
                        borderRadius={2}
                      ></Box>
                    </Box>
                    <Typography color="#718EBF" textAlign={"center"} mt={2}>
                      {item}
                    </Typography>
                  </Box>
                );
              })}
              {language === "en"
            ? null
            : faDays.map((item) => {
                return (
                  <Box>
                    <Box display={"flex"} alignItems={"end"} columnGap={2}>
                      <Box
                        width={32}
                        height={127}
                        bgcolor={"#FCAA0B"}
                        borderRadius={2}
                      ></Box>
                      <Box
                        width={32}
                        height={211}
                        bgcolor={"#1A16F3"}
                        borderRadius={2}
                      ></Box>
                    </Box>
                    <Typography color="#718EBF" textAlign={"center"} mt={2}>
                      {item}
                    </Typography>
                  </Box>
                );
              })}
        </Box>
      </Box>
    </Box>
  );
};

export default Debit;
