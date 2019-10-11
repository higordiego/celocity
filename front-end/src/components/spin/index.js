import React, { Suspense } from 'react';
import { Icon } from 'antd';

export default function WaitingComponent(Component) {
    return props => (
        <Suspense fallback={
            <div style={{ height: '350px', textAlign: 'center' }}>
                <p style={{ paddingTop: '350px' }}>
                    <Icon type="loading" style={{ fontSize: 100 }} spin />
                </p>
            </div>
        }>
            <Component {...props} />
        </Suspense >
    );
}
