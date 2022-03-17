import * as React from 'react';
import styles from './WorldClocks.module.scss';
import { IWorldClocksProps } from './IWorldClocksProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class WorldClocks extends React.Component<IWorldClocksProps, {}> {
  public render(): React.ReactElement<IWorldClocksProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName,
      city,
      timeZone
    } = this.props;
    
    return (
      <div className={`${styles.container}`}>
        <div className={`${styles.digitalClock}`}></div>
        <div className={`${styles.digitalClock}`}></div>
        <div className={`${styles.digitalClock}`}></div>
        <div className={`${styles.digitalClock}`}></div>
        <div className={`${styles.digitalClock}`}></div>
        <div className={`${styles.digitalClock}`}></div>
        <div className={`${styles.digitalClock}`}></div>
        <div className={`${styles.digitalClock}`}></div>
        <div className={`${styles.digitalClock}`}></div>
      </div>
    )
  }
}
