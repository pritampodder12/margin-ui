/**
 * Resume PDF Template
 * Professional PDF layout matching the Northline template design
 */

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from '@react-pdf/renderer';
import type { ResumeData } from '@/stores';

// Register fonts (using built-in fonts for simplicity)
// In production, you'd register custom fonts like Fraunces, Inter, JetBrains Mono

// Color palette matching CSS variables
const colors = {
  paper: '#F6F4EE',
  card: '#FFFFFF',
  ink: '#17181C',
  inkSoft: '#57585D',
  inkFaint: '#ACADAF',
  red: '#B93E28',
  redSoft: 'rgba(185, 62, 40, 0.07)',
  green: '#1F6E4A',
  greenSoft: 'rgba(31, 110, 74, 0.07)',
  amber: '#9C6B14',
  amberSoft: 'rgba(156, 107, 20, 0.07)',
  rule: '#DCD9D0',
  paperAlt: '#EDEAE0',
};

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.card,
    padding: 42,
    fontFamily: 'Helvetica',
  },
  // Header section
  header: {
    marginBottom: 18,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.ink,
    marginBottom: 4,
  },
  title: {
    fontSize: 10,
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: colors.inkSoft,
    marginBottom: 6,
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    fontSize: 9,
    color: colors.inkFaint,
  },
  contactItem: {
    color: colors.inkFaint,
  },
  contactSeparator: {
    color: colors.inkFaint,
    marginHorizontal: 4,
  },
  // Divider
  divider: {
    height: 1,
    backgroundColor: colors.rule,
    marginVertical: 14,
  },
  // Section header
  sectionHeader: {
    fontSize: 8,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    color: colors.inkFaint,
    marginBottom: 10,
    marginTop: 4,
  },
  // Summary
  summary: {
    fontSize: 10,
    lineHeight: 1.6,
    color: colors.inkSoft,
  },
  // Experience entry
  experienceEntry: {
    marginBottom: 14,
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 2,
  },
  experienceTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: colors.ink,
    flex: 1,
  },
  experienceDate: {
    fontSize: 8,
    color: colors.inkFaint,
    textAlign: 'right',
    marginLeft: 8,
    marginTop: 3,
  },
  experienceCompany: {
    fontSize: 10,
    color: colors.inkSoft,
    marginBottom: 4,
  },
  // Bullets
  bulletList: {
    marginLeft: 14,
  },
  bullet: {
    fontSize: 9,
    color: colors.inkSoft,
    lineHeight: 1.55,
    marginBottom: 3,
  },
  bulletPrefix: {
    color: colors.inkFaint,
  },
  // Education
  educationEntry: {
    marginBottom: 12,
  },
  educationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 2,
  },
  educationDegree: {
    fontSize: 11,
    fontWeight: 'bold',
    color: colors.ink,
    flex: 1,
  },
  educationDate: {
    fontSize: 8,
    color: colors.inkFaint,
    textAlign: 'right',
    marginLeft: 8,
    marginTop: 3,
  },
  educationSchool: {
    fontSize: 10,
    color: colors.inkSoft,
  },
  // Skills
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  skillBadge: {
    fontSize: 8,
    backgroundColor: colors.paperAlt,
    color: colors.inkSoft,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
});

// Props type
interface ResumePDFProps {
  data: ResumeData;
}

// Main PDF Document
const ResumePDF: React.FC<ResumePDFProps> = ({ data }) => {
  const { personalInfo, summary, experience, education, skills } = data;

  // Build contact info
  const contactItems = [
    personalInfo.email,
    personalInfo.phone,
    personalInfo.location,
    personalInfo.linkedin,
  ].filter(Boolean);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>
            {personalInfo.fullName || 'Your Name'}
          </Text>
          <Text style={styles.title}>
            {personalInfo.email}
          </Text>
          {contactItems.length > 0 && (
            <View style={styles.contactRow}>
              {contactItems.map((item, index) => (
                <Text key={index} style={styles.contactItem}>
                  {index > 0 && <Text style={styles.contactSeparator}>·</Text>}
                  {item}
                </Text>
              ))}
            </View>
          )}
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Summary */}
        {summary && (
          <>
            <Text style={styles.sectionHeader}>Summary</Text>
            <Text style={styles.summary}>{summary}</Text>
            <View style={styles.divider} />
          </>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <>
            <Text style={styles.sectionHeader}>Experience</Text>
            {experience.map((exp) => (
              <View key={exp.id} style={styles.experienceEntry}>
                <View style={styles.experienceHeader}>
                  <Text style={styles.experienceTitle}>{exp.title}</Text>
                  <Text style={styles.experienceDate}>
                    {exp.startDate} — {exp.current ? 'Present' : exp.endDate}
                  </Text>
                </View>
                <Text style={styles.experienceCompany}>
                  {exp.company}{exp.location ? ` — ${exp.location}` : ''}
                </Text>
                {exp.bullets.length > 0 && (
                  <View style={styles.bulletList}>
                    {exp.bullets.map((bullet, i) => (
                      <Text key={i} style={styles.bullet}>
                        <Text style={styles.bulletPrefix}>–</Text> {bullet}
                      </Text>
                    ))}
                  </View>
                )}
              </View>
            ))}
            <View style={styles.divider} />
          </>
        )}

        {/* Education */}
        {education.length > 0 && (
          <>
            <Text style={styles.sectionHeader}>Education</Text>
            {education.map((edu) => (
              <View key={edu.id} style={styles.educationEntry}>
                <View style={styles.educationHeader}>
                  <Text style={styles.educationDegree}>
                    {edu.degree}{edu.school ? ` — ${edu.school}` : ''}
                  </Text>
                  <Text style={styles.educationDate}>
                    {edu.startDate} — {edu.endDate}
                  </Text>
                </View>
                {edu.location && (
                  <Text style={styles.educationSchool}>{edu.location}</Text>
                )}
              </View>
            ))}
            <View style={styles.divider} />
          </>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <>
            <Text style={styles.sectionHeader}>Skills</Text>
            <View style={styles.skillsContainer}>
              {skills.map((skill, index) => (
                <Text key={index} style={styles.skillBadge}>{skill}</Text>
              ))}
            </View>
          </>
        )}
      </Page>
    </Document>
  );
};

export default ResumePDF;
