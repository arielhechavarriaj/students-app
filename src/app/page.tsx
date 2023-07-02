import styles from './styles/page.module.css'
import StudentsList from "@/app/components/studentsList";

export default function Home() {
  return (
    <main className={styles.main}>
<StudentsList/>
    </main>
  )
}
