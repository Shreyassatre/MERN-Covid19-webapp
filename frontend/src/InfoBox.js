import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import './InfoBox.css';

function InfoBox({title, cases, total, ...props }) {
    return (
        <Card onClick={props.onClick} className="infoBox">
            <CardContent>
                {/* Title */}
                <Typography className="infoBox_title" color="textSecondary">
                    {title}
                </Typography>

                {/* +120k Number of cases */}
                <h2 className="infoBox_cases">{cases}</h2>

                {/* 1.2M Total */}
                <Typography className="infoBox_total" color="textSecondary">
                    {total} Total
                </Typography>

            </CardContent>
        </Card>
    )
}

export default InfoBox
