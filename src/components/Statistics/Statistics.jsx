import { Notification } from '../Notification/Notification';
import {
  StatisticsItem,
  StatisticsList,
  StatisticsText,
} from './Statistics.styled';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsList>
      {total() > 0 ? (
        <div>
          <StatisticsItem>
            <StatisticsText>Good:</StatisticsText>
            <StatisticsText>{good}</StatisticsText>
          </StatisticsItem>
          <StatisticsItem>
            <StatisticsText>Neutral:</StatisticsText>
            <StatisticsText>{neutral}</StatisticsText>
          </StatisticsItem>
          <StatisticsItem>
            <StatisticsText>Bad:</StatisticsText>
            <StatisticsText>{bad}</StatisticsText>
          </StatisticsItem>
          <StatisticsItem>
            <StatisticsText>Total:</StatisticsText>
            <StatisticsText>{total()}</StatisticsText>
          </StatisticsItem>
          <StatisticsItem>
            <StatisticsText>Positive feedback:</StatisticsText>
            <StatisticsText>{positivePercentage()}%</StatisticsText>
          </StatisticsItem>
        </div>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </StatisticsList>
  );
};
