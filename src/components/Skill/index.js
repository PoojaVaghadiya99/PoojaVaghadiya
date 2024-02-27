import { useEffect } from 'react'
import './index.scss'
import TagCloud from 'TagCloud'

const Skill = () => {
  useEffect(() => {
    return () => {
      const container = '.tagcloud'
      const texts = [
        'Java',
        'J2EE',
        'Python',
        'Node.js',
        'Django',
        'API',
        'Swagger',
        'HTML',
        'CSS',
        'Bootstrap',
        'JavaScript',
        'Typescript',
        'Angular',
        'React',
        'MongoDB',
        'MySQL',
        'Informix',
        'DB2',
        'Cassandra',
        'Oracle',
        'Microsoft Azure',
        'Amazon Work Docs',
        'VS Code',
        'Git',
        'GitHub',
        'Postman',
      ]
      const options = {
        radius: 400,
        maxSpeed: 'normal',
        initSpeed: 'normal',
        keep: true,
      }
      TagCloud(container, texts, options)
    }
  }, [])

  return (
    <>
      <div className="text-shpere">
        <span className="tagcloud"></span>
      </div>
    </>
  )
}

export default Skill
