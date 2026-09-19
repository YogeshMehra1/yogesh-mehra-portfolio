import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CodingTool {
  id: string
  name: string
  description: string
  icon: string
  category: 'ai' | 'ide' | 'productivity'
  proficiency: number
  examples: string[]
}

interface ToolsState {
  tools: CodingTool[]
  activeTool: string | null
  isDemoMode: boolean
}

const initialState: ToolsState = {
  tools: [
    {
      id: 'cursor',
      name: 'Cursor IDE',
      description: 'AI-powered code editor with intelligent autocomplete and refactoring',
      icon: '⚡',
      category: 'ide',
      proficiency: 90,
      examples: ['Code completion', 'Refactoring suggestions', 'Bug detection']
    },
    {
      id: 'github-copilot',
      name: 'GitHub Copilot',
      description: 'AI pair programmer that suggests code in real-time',
      icon: '🤖',
      category: 'ai',
      proficiency: 85,
      examples: ['Code suggestions', 'Function generation', 'Documentation']
    },
    {
      id: 'chatgpt',
      name: 'ChatGPT',
      description: 'Advanced AI assistant for code explanation and problem-solving',
      icon: '💬',
      category: 'ai',
      proficiency: 88,
      examples: ['Code explanation', 'Debugging help', 'Architecture guidance']
    },
    {
      id: 'claude',
      name: 'Claude',
      description: 'AI assistant with strong reasoning for complex coding tasks',
      icon: '🧠',
      category: 'ai',
      proficiency: 82,
      examples: ['Code review', 'Optimization suggestions', 'Testing strategies']
    },
    {
      id: 'vscode',
      name: 'VS Code',
      description: 'Popular code editor with extensive extensions',
      icon: '💻',
      category: 'ide',
      proficiency: 95,
      examples: ['Extensions', 'Git integration', 'Debugging']
    },
    {
      id: 'figma',
      name: 'Figma',
      description: 'Collaborative design tool for UI/UX',
      icon: '🎨',
      category: 'productivity',
      proficiency: 75,
      examples: ['UI design', 'Prototyping', 'Developer handoff']
    }
  ],
  activeTool: null,
  isDemoMode: false
}

const toolsSlice = createSlice({
  name: 'tools',
  initialState,
  reducers: {
    setActiveTool: (state, action: PayloadAction<string | null>) => {
      state.activeTool = action.payload
    },
    toggleDemoMode: (state) => {
      state.isDemoMode = !state.isDemoMode
    },
    updateProficiency: (state, action: PayloadAction<{ id: string; value: number }>) => {
      const tool = state.tools.find(t => t.id === action.payload.id)
      if (tool) {
        tool.proficiency = action.payload.value
      }
    }
  }
})

export const { setActiveTool, toggleDemoMode, updateProficiency } = toolsSlice.actions
export default toolsSlice.reducer
