import React from "react";
import { categories } from "../../utils/categories";
import {
  Container,
  Title,
  AmountCard,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date,
} from "./styles";

export interface TransactionCardProps {
    type: "positive" | "negative";
    name: string;
    amount: string;
    category: string;
    date: string;
}

interface Props {
  data: TransactionCardProps;
}

export function TransactionCard({data}: Props) {
  const category = categories.filter(
    item => item.key === data.category
  )[0];

  return (
    <Container>
      <Title>{data.name}</Title>
      <AmountCard type={data.type}>
        {/* {data.type === 'negative' ? '- ' + data.amount : data.amount} */}
        {data.type === 'negative' && '- '}
        {data.amount}
      </AmountCard>

      <Footer>
        <Category>
          <Icon name={category.icon} />
          <CategoryName>{category.name}</CategoryName>
        </Category>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  );
}
