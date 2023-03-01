import styled from "@emotion/styled"

const Contenedor = styled.div`
    color: #fff;
    font-family: 'Lato' ,sans-serif;
    display: flex;
    width: 100%;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`
const Imagen = styled.img`
    display: block;
    width: 120px;
`
const Texto = styled.p`
  font-size: 14px
    span {
        font-weight: 700;
    }
`
const Precio = styled.p`
    font-size: 14px
    span {
        font-weight: 700;
    }
`
const Resultado = ({resultado}) => {

    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado
  return (
    <Contenedor>
        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen"/>
        <div>
            <Texto>El precio es de: <Precio>{PRICE}</Precio></Texto>
            <Texto>Precio mas alto del dia: <Precio>{HIGHDAY}</Precio></Texto>
            <Texto>Precio mas bajo del dia: <Precio>{LOWDAY}</Precio></Texto>
            <Texto>Variacion ultimas 24 horas: <Precio>{CHANGEPCT24HOUR}</Precio></Texto>
            <Texto>Ultima Actualizacion: <Precio>{LASTUPDATE}</Precio></Texto>
        </div>    
    </Contenedor>
  )
}

export default Resultado