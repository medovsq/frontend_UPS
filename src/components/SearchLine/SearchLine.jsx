import styles from './styles.module.css'

export function SearchLine(){
    return<>
    <form className={styles.search_line} action="">
    <svg className={styles.icon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="11.8576" cy="11.9105" r="6.91047" stroke="#9F9F9F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.6639 17.0757L19.3732 19.778" stroke="#9F9F9F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    <input className={styles.search} name="s" placeholder="Введите название секции или кружка" type="search" />
    <button className={styles.button} type="reset">Найти</button>
    </form>
    </>
}