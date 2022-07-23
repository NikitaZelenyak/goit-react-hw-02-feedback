import styled from "styled-components";

export const ListButton = styled.ul`
display:flex;
align-items:center;

`


export const ItemBtn = styled.li`
list-style: none;
&:not(:first-child){
    margin-left: 20px;
    width: ;
}
`
export const Btn = styled.button`

padding: 8px;
background-color: ${(option) => {
  const arr= Object.values(option);

    
        if (arr.includes('good')) {
        return 'green'
    }else if  (arr.includes('bad')) {
        return 'red'
        }
 return "orange"
}


};
border-radius: 8px ;
border-color:  ${(option) => {
  const arr= Object.values(option);

    
        if (arr.includes('good')) {
        return 'green'
    }else if  (arr.includes('bad')) {
        return 'red'
        }
 return "orange"
}


};
  

`