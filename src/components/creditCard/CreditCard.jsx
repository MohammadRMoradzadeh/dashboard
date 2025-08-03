import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

const CreditCard = () => {
  const theme = useTheme();
  const {
    i18n: { language, dir },
    t,
  } = useTranslation();
  return (
    <>
      <Box display={"flex"} flexDirection={"column"} rowGap={2}>
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"end"}
        >
                  <Typography
          variant="h4"
          fontWeight={"bold"}
          px={1}
          color={theme.palette.mode === "dark" ? "white" : "#333B69"}
        >
          {language === "fa" ? "کارت من" : "My Card"}
        </Typography>        <Typography
          variant="h6"
          fontWeight={"bold"}
          px={1}
          color={theme.palette.mode === "dark" ? "white" : "#333B69"}
          
        >
          {language === "fa" ? "مشاهده همه" : "See all"}
        </Typography>
        </Box>
        <Box
          sx={{
            width: 460,
            height: 280,
            borderRadius: 4,
            background: "linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)",
            color: "#fff",
     
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: 3,
          }}
        >
          {/* Balance */}
          <Box p={3}>
            <Typography variant="subtitle2" sx={{ opacity: 0.8 }}>
              {language === "fa" ? "تعادل" : "Balance"}
            </Typography>
            <Typography variant="h5" fontWeight="bold">
              {language === "fa" ? "" : "$"}5,756
              {language === "fa" ? "تومان" : ""}
            </Typography>
          </Box>

          {/* Card Info */}
          <Grid p={3} container justifyContent="space-between">
            <Grid item>
              <Typography variant="caption" sx={{ opacity: 0.8 }}>
                {language === "fa" ? "دارنده کارت" : "card holder"}
              </Typography>
              <Typography variant="body2">
                {language === "fa" ? "علی زارع" : "Eddy Cusuma"}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption" sx={{ opacity: 0.8 }}>
                {language === "fa" ? "تاریخ انقضا" : "VALID THRU"}
              </Typography>
              <Typography variant="body2">12/22</Typography>
            </Grid>
          </Grid>
          <Box
          p={3}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width={1}
            sx={{
              background:'linear-gradient(0deg, #ffffff2f 30%, #f0f0f085 90%)'
            }}
          >
            <Typography variant="h6" letterSpacing={2}>
              3778 **** **** 1234
            </Typography>
            {/* Placeholder for logo */}
            <Box
              sx={{
                width: 40,
                height: 25,
                borderRadius: "50%",
                background: "linear-gradient(to right, #ccc, #eee)",
                opacity: 0.8,
              }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CreditCard;
