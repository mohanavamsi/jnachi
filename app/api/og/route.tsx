import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';
import { calculateScores, CATEGORY_LABELS, Category } from '@/lib/assessmentData';

export const runtime = 'nodejs';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const rawAnswers = searchParams.get('a');
  const customScore = searchParams.get('score');
  const customLevel = searchParams.get('level');
  const isDefault = searchParams.get('default') === 'true' || (!rawAnswers && !customScore);

  if (isDefault) {
    // Render default brand OpenGraph image (1200x630)
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#34259b',
            backgroundImage: 'linear-gradient(135deg, #3b2aa6 0%, #34259b 60%, #291b82 100%)',
            padding: '70px 80px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Right Decorative Celestial Orbit Mark */}
          <div
            style={{
              position: 'absolute',
              right: '-40px',
              top: '50px',
              width: '530px',
              height: '530px',
              borderRadius: '50%',
              border: '28px solid rgba(255, 255, 255, 0.22)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Center White Dot */}
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                boxShadow: '0 0 30px rgba(255, 255, 255, 0.8)',
              }}
            />
          </div>

          {/* Top Brand Identity */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
              <path
                d="M 28 16 C 28 22.627 22.627 28 16 28 C 9.373 28 4 22.627 4 16 C 4 9.373 9.373 4 16 4 C 18 4 19.8 4.6 21.4 5.5"
                stroke="#ffffff"
                strokeWidth="3"
                strokeLinecap="round"
                strokeOpacity="0.8"
              />
              <circle cx="22" cy="10" r="5" fill="#ffffff" />
            </svg>
            <span
              style={{
                fontSize: '34px',
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '-0.03em',
              }}
            >
              jnachi
            </span>
            <div
              style={{
                marginLeft: '18px',
                padding: '6px 16px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#e0e7ff',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.08em',
              }}
            >
              AI SKILLS BENCHMARK
            </div>
          </div>

          {/* Central Message */}
          <div style={{ display: 'flex', flexDirection: 'column', marginTop: '75px', maxWidth: '680px' }}>
            <h1
              style={{
                fontSize: '62px',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                margin: 0,
              }}
            >
              Know it. Use it. Prove it.
            </h1>
            <p
              style={{
                fontSize: '27px',
                color: '#c7d2fe',
                lineHeight: 1.4,
                marginTop: '20px',
                marginBottom: '0px',
              }}
            >
              A precise reading of how activated your AI knowledge is.
            </p>

            {/* Pillar badges */}
            <div style={{ display: 'flex', gap: '12px', marginTop: '36px' }}>
              {['Literacy & Prompting', 'Automation Flow', 'Privacy & Ethics', 'Growth Mindset'].map((item) => (
                <div
                  key={item}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: '#e0e7ff',
                    fontSize: '13px',
                    fontWeight: 500,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Link */}
          <div style={{ display: 'flex', alignItems: 'center', marginTop: 'auto', gap: '12px' }}>
            <span style={{ fontSize: '22px', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em' }}>
              jnachi.com
            </span>
            <span style={{ fontSize: '16px', color: '#a5b4fc' }}>
              — 9 Questions. 3 Minutes. Objective Momentum.
            </span>
          </div>
        </div>
      ),
      { width: 1200, height: 630 }
    );
  }

  // Compute Dynamic Score from answers array
  let overallScore = 50;
  let overallLevel = 'Level 2: Practitioner';
  let categoryHighlights: { label: string; status: string; score: number }[] = [];

  if (rawAnswers) {
    const answers = rawAnswers.split(',').map((n) => parseInt(n, 10) || 0);
    const result = calculateScores(answers);
    overallScore = result.overallScore;
    overallLevel = result.overallLevel;

    const categories: Category[] = ['literacy', 'automation', 'privacy', 'growth'];
    categoryHighlights = categories.map((cat) => ({
      label: CATEGORY_LABELS[cat],
      score: result.subScores[cat],
      status: result.getSubScoreStatus(result.subScores[cat]),
    }));
  } else if (customScore) {
    overallScore = Math.max(0, Math.min(100, parseInt(customScore, 10) || 50));
    overallLevel = customLevel || (overallScore <= 25 ? 'Level 1: Explorer Foundation' : overallScore <= 50 ? 'Level 2: Practitioner' : overallScore <= 75 ? 'Level 3: Builder' : 'Level 4: Architect');
  }

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#34259b',
          backgroundImage: 'linear-gradient(135deg, #3b2aa6 0%, #34259b 60%, #291b82 100%)',
          padding: '60px 75px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Right Decorative Orbit Ring with Centered Dot */}
        <div
          style={{
            position: 'absolute',
            right: '-30px',
            top: '65px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            border: '28px solid rgba(255, 255, 255, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              boxShadow: '0 0 26px rgba(255, 255, 255, 0.8)',
            }}
          />
        </div>

        {/* Top Header: Logo + "jnachi" + Result Tag */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
              <path
                d="M 28 16 C 28 22.627 22.627 28 16 28 C 9.373 28 4 22.627 4 16 C 4 9.373 9.373 4 16 4 C 18 4 19.8 4.6 21.4 5.5"
                stroke="#ffffff"
                strokeWidth="3"
                strokeLinecap="round"
                strokeOpacity="0.8"
              />
              <circle cx="22" cy="10" r="5" fill="#ffffff" />
            </svg>
            <span
              style={{
                fontSize: '34px',
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '-0.03em',
              }}
            >
              jnachi
            </span>
          </div>

          <div
            style={{
              padding: '6px 18px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              color: '#ffffff',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.08em',
            }}
          >
            OFFICIAL ASSESSMENT RESULT
          </div>
        </div>

        {/* Main Content Area */}
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '45px', maxWidth: '680px' }}>
          <span
            style={{
              fontSize: '15px',
              fontWeight: 700,
              color: '#c7d2fe',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Verified AI Momentum Score
          </span>

          <div style={{ display: 'flex', alignItems: 'baseline', marginTop: '10px', gap: '16px' }}>
            <span
              style={{
                fontSize: '118px',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1,
                letterSpacing: '-0.04em',
              }}
            >
              {overallScore}
            </span>
            <span
              style={{
                fontSize: '38px',
                fontWeight: 600,
                color: 'rgba(255, 255, 255, 0.55)',
              }}
            >
              / 100
            </span>
          </div>

          {/* Level Pill */}
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '14px' }}>
            <div
              style={{
                padding: '8px 22px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(255, 255, 255, 0.18)',
                border: '1px solid rgba(255, 255, 255, 0.35)',
                color: '#ffffff',
                fontSize: '24px',
                fontWeight: 700,
                letterSpacing: '-0.01em',
              }}
            >
              {overallLevel}
            </div>
          </div>

          {/* Category mini breakdown if available */}
          {categoryHighlights.length > 0 && (
            <div style={{ display: 'flex', gap: '10px', marginTop: '30px', flexWrap: 'wrap' }}>
              {categoryHighlights.map((c) => (
                <div
                  key={c.label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 14px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    fontSize: '13px',
                    color: '#e0e7ff',
                  }}
                >
                  <span style={{ fontWeight: 600 }}>{c.label.split(' ')[0]}:</span>
                  <span style={{ color: '#ffffff', fontWeight: 700 }}>{c.score}%</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom CTA Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 'auto',
            paddingTop: '20px',
            borderTop: '1px solid rgba(255, 255, 255, 0.15)',
            width: '100%',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff' }}>
              See your own Jnachi Score:
            </span>
            <span style={{ fontSize: '18px', fontWeight: 700, color: '#a5b4fc', textDecoration: 'underline' }}>
              jnachi.com/assessment
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.65)' }}>
              Know it. Use it. Prove it.
            </span>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
