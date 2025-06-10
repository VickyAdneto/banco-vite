import React from "react";
import Component01Awareness from "../imports/01Awareness";

interface AwarenessPageProps {
  navigateTo: (page: string) => void;
}

export function AwarenessPage({ navigateTo }: AwarenessPageProps) {
  return (
    <div style={{ 
      position: 'relative',
      width: '100%',
      height: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Use the original Figma awareness design */}
      <Component01Awareness />
      
      {/* Overlay interactive functionality for buttons */}
      <div style={{
        position: 'absolute',
        left: 'calc(33.3333% + 95px)',
        top: '610px',
        width: '688px',
        height: '128px',
        zIndex: 10
      }}>
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          gap: '12px',
          padding: '16px'
        }}>
          {/* Explore Your Rewards Button */}
          <button
            onClick={() => navigateTo('discovery')}
            style={{
              backgroundColor: '#f9f9f9',
              border: '1px solid #e2e2e2',
              borderRadius: '8px',
              padding: '16px',
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#97144d',
              cursor: 'pointer',
              fontFamily: 'Arial, sans-serif',
              flex: 1
            }}
          >
            Explore Your Rewards
          </button>
          
          {/* Open a Savings Account Button */}
          <button
            onClick={() => navigateTo('discovery')}
            style={{
              backgroundColor: '#97144d',
              border: 'none',
              borderRadius: '8px',
              padding: '16px',
              fontSize: '16px',
              fontWeight: 'bold',
              color: 'white',
              cursor: 'pointer',
              fontFamily: 'Arial, sans-serif',
              flex: 1
            }}
          >
            Open a Savings Account
          </button>
        </div>
      </div>

      {/* Interactive navigation overlay for header */}
      <div style={{
        position: 'absolute',
        top: '28px',
        left: 'calc(58.3333% + 35px)',
        zIndex: 10
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          {/* Navigation buttons overlay */}
          <button
            onClick={() => navigateTo('awareness')}
            style={{
              background: 'rgba(255, 255, 255, 0.9)',
              border: 'none',
              padding: '12px 16px',
              fontSize: '14px',
              color: '#282828',
              cursor: 'pointer',
              fontFamily: 'Arial, sans-serif'
            }}
          >
            Home
          </button>
          
          <button
            onClick={() => navigateTo('discovery')}
            style={{
              background: 'rgba(255, 255, 255, 0.9)',
              border: 'none',
              padding: '12px 16px',
              fontSize: '14px',
              color: '#282828',
              cursor: 'pointer',
              fontFamily: 'Arial, sans-serif'
            }}
          >
            Accounts
          </button>
          
          <button
            onClick={() => navigateTo('activation')}
            style={{
              background: 'rgba(255, 255, 255, 0.9)',
              border: 'none',
              padding: '12px 16px',
              fontSize: '14px',
              color: '#282828',
              cursor: 'pointer',
              fontFamily: 'Arial, sans-serif'
            }}
          >
            Rewards
          </button>
          
          <button
            onClick={() => navigateTo('post-redemption')}
            style={{
              background: 'rgba(255, 255, 255, 0.9)',
              border: 'none',
              padding: '12px 16px',
              fontSize: '14px',
              color: '#282828',
              cursor: 'pointer',
              fontFamily: 'Arial, sans-serif'
            }}
          >
            Support
          </button>
        </div>
      </div>
    </div>
  );
}