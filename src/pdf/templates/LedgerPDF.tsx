/**
 * Ledger PDF Template
 * Classic single-column layout with proper A4 sizing
 */

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from '@react-pdf/renderer';
import type { ResumeData } from '@/stores';

// Colors matching CSS variables
const colors = {
  card: '#FFFFFF',
  ink: '#17181C',
  inkSoft: '#57585D',
  inkFaint: '#ACADAF',
  rule: '#E5E2D9',
  paperAlt: '#F6F4EE',
};

// Styles - using Helvetica (built-in) with different weights
const styles = StyleSheet.create({
  page: {
    width: 595.28, // A4 width in points
    height: 841.89, // A4 height in points
    padding: 42,
    backgroundColor: colors.card,
    fontFamily: 'Helvetica',
    fontSize: 10,
    lineHeight: 1.5,
  },
  header: {
    marginBottom: 20,
    paddingBottom: 16,
    borderBottomWidth: 2,
    borderBottomColor: colors.ink,
  },
  name: {
    fontSize: 28,
    fontWeight: 700,
    color: colors.ink,
    marginBottom: 6,
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    fontSize: 9,
    color: colors.inkSoft,
  },
  contactItem: {
    color: colors.inkSoft,
  },
  section: {
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: 600,
    color: colors.ink,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    marginBottom: 10,
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: colors.rule,
  },
  experienceEntry: {
    marginBottom: 14,
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3,
  },
  experienceTitle: {
    fontSize: 11,
    fontWeight: 600,
    color: colors.ink,
  },
  experienceDate: {
    fontSize: 9,
    color: colors.inkFaint,
  },
  experienceCompany: {
    fontSize: 10,
    color: colors.inkSoft,
    marginBottom: 4,
  },
  bulletList: {
    marginLeft: 12,
  },
  bullet: {
    fontSize: 9,
    color: colors.inkSoft,
    marginBottom: 3,
    lineHeight: 1.45,
  },
  educationEntry: {
    marginBottom: 10,
  },
  educationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  educationDegree: {
    fontSize: 10,
    fontWeight: 600,
    color: colors.ink,
  },
  educationSchool: {
    fontSize: 9,
    color: colors.inkSoft,
  },
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
    borderRadius: 3,
  },
  summary: {
    fontSize: 10,
    color: colors.inkSoft,
    lineHeight: 1.6,
  },
});

interface LedgerPDFProps {
  data: ResumeData;
}

const LedgerPDF: React.FC<LedgerPDFProps> = ({ data }) => {
  const { personalInfo, summary, experience, education, skills } = data;

  const contactItems = [
    personalInfo.email,
    personalInfo.phone,
    personalInfo.location,
    personalInfo.linkedin,
  ].filter(Boolean);

  return (
    <Document>
      <Page size="A4" style={styles.page} wrap>
        {/* Header */}
        <View style={styles.header} fixed>
          <Text style={styles.name}>{personalInfo.fullName || 'Your Name'}</Text>
          <View style={styles.contactRow}>
            {contactItems.map((item, i) => (
              <Text key={i}>
                {i > 0 ? ' · ' : ''}{item}
              </Text>
            ))}
          </View>
        </View>

        {/* Summary */}
        {summary && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Summary</Text>
            <Text style={styles.summary}>{summary}</Text>
          </View>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Experience</Text>
            {experience.map((exp) => (
              <View key={exp.id} style={styles.experienceEntry} wrap>
                <View style={styles.experienceHeader}>
                  <Text style={styles.experienceTitle}>{exp.title}</Text>
                  <Text style={styles.experienceDate}>
                    {exp.startDate} — {exp.current ? 'Present' : exp.endDate}
                  </Text>
                </View>
                <Text style={styles.experienceCompany}>
                  {exp.company}{exp.location ? `, ${exp.location}` : ''}
                </Text>
                {exp.bullets.length > 0 && (
                  <View style={styles.bulletList}>
                    {exp.bullets.filter(Boolean).map((bullet, i) => (
                      <Text key={i} style={styles.bullet}>
                        • {bullet}
                      </Text>
                    ))}
                  </View>
                )}
              </View>
            ))}
          </View>
        )}

        {/* Education */}
        {education.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            {education.map((edu) => (
              <View key={edu.id} style={styles.educationEntry}>
                <View style={styles.educationHeader}>
                  <Text style={styles.educationDegree}>{edu.degree}</Text>
                  <Text style={styles.experienceDate}>
                    {edu.startDate} — {edu.endDate}
                  </Text>
                </View>
                <Text style={styles.educationSchool}>
                  {edu.school}{edu.location ? `, ${edu.location}` : ''}
                </Text>
              </View>
            ))}
          </View>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills</Text>
            <View style={styles.skillsContainer}>
              {skills.filter(Boolean).map((skill, i) => (
                <Text key={i} style={styles.skillBadge}>{skill}</Text>
              ))}
            </View>
          </View>
        )}
      </Page>
    </Document>
  );
};

export default LedgerPDF;
