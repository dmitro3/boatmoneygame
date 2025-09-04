import { useState } from 'react'
import { useAccount } from 'wagmi'

export default function Instructions() {
  const { isConnected } = useAccount()
  const [isExpanded, setIsExpanded] = useState(false)
  const [activeTab, setActiveTab] = useState('basics')

  const tabs = [
    { id: 'basics', label: 'BASICS', icon: '🎯' },
    { id: 'gameplay', label: 'GAMEPLAY', icon: '🚤' },
    { id: 'strategy', label: 'STRATEGY', icon: '💡' }
  ]

  return (
    <div className="terminal-bg rounded-xl border-2 border-cyan-400 mb-6 neon-glow">
      {/* Header */}
      <div 
        className="p-4 cursor-pointer flex items-center justify-between hover:bg-cyan-400 hover:bg-opacity-10 transition-all"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center space-x-3">
          <div className="text-3xl">📊</div>
          <div>
            <h2 className="text-xl font-bold text-cyan-400 neon-text" style={{ fontFamily: 'Orbitron, monospace' }}>
              OPERATION MANUAL
            </h2>
            <p className="text-pink-400 text-sm font-semibold" style={{ fontFamily: 'Rajdhani, monospace' }}>
              {isExpanded ? '[ COLLAPSE INTEL ]' : '[ EXPAND INTEL ]'}
            </p>
          </div>
        </div>
        <div className="text-cyan-400 text-2xl neon-text">
          {isExpanded ? '▲' : '▼'}
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="border-t-2 border-cyan-400">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 p-4 mobile-stack border-b border-cyan-400 border-opacity-50">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg font-bold transition-all duration-300 mobile-text-sm ${
                  activeTab === tab.id
                    ? 'vice-button'
                    : 'terminal-bg border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:bg-opacity-20'
                }`}
                style={{ fontFamily: 'Orbitron, monospace' }}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-6 mobile-p-4">
            {activeTab === 'basics' && (
              <div className="space-y-6">
                <div className="terminal-bg p-4 rounded-lg border border-cyan-400 border-opacity-50">
                  <h3 className="text-lg font-bold text-cyan-400 mb-3 neon-text" style={{ fontFamily: 'Orbitron, monospace' }}>
                    🚤 THE OPERATION
                  </h3>
                  <div className="space-y-3 text-white" style={{ fontFamily: 'Rajdhani, monospace' }}>
                    <p className="text-pink-400">
                      <strong>BOAT RUNNER</strong> is a high-risk blockchain game where you operate smuggling boats in the neon-soaked waters of Miami '85.
                    </p>
                    <p>
                      • <strong className="text-yellow-400">BUY RAFTS:</strong> Start with basic rafts using $BOAT tokens
                    </p>
                    <p>
                      • <strong className="text-yellow-400">RUN OPERATIONS:</strong> Execute smuggling runs with either $BOAT or $JOINT tokens
                    </p>
                    <p>
                      • <strong className="text-yellow-400">UPGRADE FLEET:</strong> Use $BOAT to upgrade boats for better success rates
                    </p>
                    <p>
                      • <strong className="text-yellow-400">STACK PAPER:</strong> Win big payouts or lose everything trying
                    </p>
                  </div>
                </div>

                <div className="responsive-grid">
                  <div className="terminal-bg p-4 rounded-lg border border-yellow-400 border-opacity-50">
                    <h4 className="text-md font-bold text-yellow-400 mb-2" style={{ fontFamily: 'Orbitron, monospace' }}>
                      💰 $BOAT OPERATIONS
                    </h4>
                    <ul className="text-white space-y-1 text-sm" style={{ fontFamily: 'Rajdhani, monospace' }}>
                      <li>• Buy new rafts</li>
                      <li>• Upgrade boat levels</li>
                      <li>• Run smuggling operations</li>
                      <li>• Lower risk amounts, steady gains</li>
                    </ul>
                  </div>
                  
                  <div className="terminal-bg p-4 rounded-lg border border-pink-400 border-opacity-50">
                    <h4 className="text-md font-bold text-pink-400 mb-2" style={{ fontFamily: 'Orbitron, monospace' }}>
                      🔥 $JOINT OPERATIONS
                    </h4>
                    <ul className="text-white space-y-1 text-sm" style={{ fontFamily: 'Rajdhani, monospace' }}>
                      <li>• High-risk smuggling runs</li>
                      <li>• Massive potential payouts</li>
                      <li>• Higher play amounts required</li>
                      <li>• More dangerous waters</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'gameplay' && (
              <div className="space-y-6">
                <div className="terminal-bg p-4 rounded-lg border border-cyan-400 border-opacity-50">
                  <h3 className="text-lg font-bold text-cyan-400 mb-3 neon-text" style={{ fontFamily: 'Orbitron, monospace' }}>
                    ⚓ RUNNING OPERATIONS
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl">1️⃣</span>
                      <div>
                        <h4 className="font-bold text-yellow-400">SELECT YOUR VESSEL</h4>
                        <p className="text-white text-sm" style={{ fontFamily: 'Rajdhani, monospace' }}>
                          Each boat has different success rates and risk levels. Higher level boats = better odds.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl">2️⃣</span>
                      <div>
                        <h4 className="font-bold text-yellow-400">CHOOSE OPERATION MODE</h4>
                        <p className="text-white text-sm" style={{ fontFamily: 'Rajdhani, monospace' }}>
                          Pick $BOAT (safer) or $JOINT (riskier) from the dropdown on each boat card.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl">3️⃣</span>
                      <div>
                        <h4 className="font-bold text-yellow-400">SET YOUR PLAY AMOUNT</h4>
                        <p className="text-white text-sm" style={{ fontFamily: 'Rajdhani, monospace' }}>
                          Enter how much you want to risk. Higher stakes = bigger potential rewards.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl">4️⃣</span>
                      <div>
                        <h4 className="font-bold text-yellow-400">INITIATE RUN</h4>
                        <p className="text-white text-sm" style={{ fontFamily: 'Rajdhani, monospace' }}>
                          Hit the button and watch the blockchain determine your fate. Success pays out, failure costs you.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="responsive-grid">
                  <div className="terminal-bg p-4 rounded-lg border border-green-400 border-opacity-50">
                    <h4 className="text-md font-bold text-green-400 mb-2" style={{ fontFamily: 'Orbitron, monospace' }}>
                      ✅ SUCCESS OUTCOMES
                    </h4>
                    <ul className="text-white space-y-1 text-sm" style={{ fontFamily: 'Rajdhani, monospace' }}>
                      <li>• Win your stake multiplied by boat level</li>
                      <li>• Yacht runs can spawn bonus rafts</li>
                      <li>• Keep your boat for more runs</li>
                    </ul>
                  </div>
                  
                  <div className="terminal-bg p-4 rounded-lg border border-red-400 border-opacity-50">
                    <h4 className="text-md font-bold text-red-400 mb-2" style={{ fontFamily: 'Orbitron, monospace' }}>
                      ❌ FAILURE OUTCOMES
                    </h4>
                    <ul className="text-white space-y-1 text-sm" style={{ fontFamily: 'Rajdhani, monospace' }}>
                      <li>• Lose your staked tokens</li>
                      <li>• Boat might get burned or downgraded</li>
                      <li>• Higher level boats = worse penalties</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'strategy' && (
              <div className="space-y-6">
                <div className="terminal-bg p-4 rounded-lg border border-cyan-400 border-opacity-50">
                  <h3 className="text-lg font-bold text-cyan-400 mb-3 neon-text" style={{ fontFamily: 'Orbitron, monospace' }}>
                    🧠 CRIMINAL MASTERMIND TIPS
                  </h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-bold text-yellow-400">🚀 START SMALL, SCALE UP</h4>
                      <p className="text-white text-sm" style={{ fontFamily: 'Rajdhani, monospace' }}>
                        Begin with rafts and $BOAT operations. Build your fleet before attempting high-stakes $JOINT runs.
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-bold text-yellow-400">⚖️ RISK MANAGEMENT</h4>
                      <p className="text-white text-sm" style={{ fontFamily: 'Rajdhani, monospace' }}>
                        Never stake more than you can afford to lose. Diversify across multiple boats to spread risk.
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-bold text-yellow-400">🔄 UPGRADE PATH</h4>
                      <p className="text-white text-sm" style={{ fontFamily: 'Rajdhani, monospace' }}>
                        Focus on upgrading boats to Yacht level for the best success rates and bonus raft spawning.
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-bold text-yellow-400">⏰ TIMING IS KEY</h4>
                      <p className="text-white text-sm" style={{ fontFamily: 'Rajdhani, monospace' }}>
                        Watch for cooldown periods between runs. Plan your operations during peak pool times.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="terminal-bg p-3 rounded-lg border border-cyan-400 border-opacity-30 text-center">
                    <div className="text-2xl mb-2">�</div>
                    <div className="text-cyan-400 font-bold text-sm">RAFT</div>
                    <div className="text-pink-400 text-xs">Safe Start</div>
                  </div>
                  <div className="terminal-bg p-3 rounded-lg border border-cyan-400 border-opacity-30 text-center">
                    <div className="text-2xl mb-2">🛶</div>
                    <div className="text-cyan-400 font-bold text-sm">DINGHY</div>
                    <div className="text-pink-400 text-xs">Better Odds</div>
                  </div>
                  <div className="terminal-bg p-3 rounded-lg border border-cyan-400 border-opacity-30 text-center">
                    <div className="text-2xl mb-2">🚤</div>
                    <div className="text-cyan-400 font-bold text-sm">SPEEDBOAT</div>
                    <div className="text-pink-400 text-xs">High Risk</div>
                  </div>
                  <div className="terminal-bg p-3 rounded-lg border border-cyan-400 border-opacity-30 text-center">
                    <div className="text-2xl mb-2">🛥️</div>
                    <div className="text-cyan-400 font-bold text-sm">YACHT</div>
                    <div className="text-pink-400 text-xs">Elite Status</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
