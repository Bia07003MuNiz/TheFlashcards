import { Box, styled, Typography } from '@mui/material';

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  gap: 24px;

  margin: 0 auto;
  width: 342px;
  height: 100vh;
  background-color: #FFF;
`;

export const Titulo = styled(Typography)`
  font-size: 12px;
  font-weight: 700;
`;

export const ItemsDaSidebar = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  width: 100%;
`;

export const ContainerDoInput = styled(Box)`
 
`;

export const Footer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 24px;

`;

export const AreaDoUsuario = styled(Box)`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 30px 0px ;
  gap: 16px;

  height: 80px;

  border-top: 1px solid #E7E5E4;


  .avatar{
    .avatar_footer{
      width: 40px;
    }
  }
  
  .areaDeTexto{
    display: flex;
    flex-direction: column;
    .nome{
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      color: #46423F;
      max-width: 140px;        
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .email{
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #7A7471;
      max-width: 140px;        
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .logout{
    margin-left: auto;
    flex-shrink: 0;  
  }  
`;

export const BadgeContador = styled(Box)`
  padding: 2px 6px;
  min-width: 18.77px;
  height: 16px;
  background: #432dd7;
  border-radius: 10px;
  font-weight: 700;
  font-size: 10px;
  line-height: 12px;
  color: #FFFFFF;
`;
