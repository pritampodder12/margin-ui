/**
 * Northline PDF Template
 * Modern single-column layout with accent color
 */

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from '@react-pdf/renderer';
import type { ResumeData } from '@/store';

// Colors
const colors = {
  card: '#FFFFFF',
  ink: '#17181C',
  inkSoft: '#57585D',
  inkFaint: '#ACADAF',
  red: '#B93E28',
  paperAlt: '#F6F4EE',
};

// Styles - using built-in fonts
const styles = StyleSheet.create({
  page: {
    width: 595.28,
    height: 841.89,
    padding: 46,
    backgroundColor: colors.card,
    fontFamily: 'Helvetica',
    fontSize: 10,
    lineHeight: 1.5,
  },
  header: {
    marginBottom: 22,
  },
  name: {
    fontSize: 26,
    fontWeight: 700,
    color: colors.ink,
    marginBottom: 4,
  },
  title: {
    fontSize: 10,
    letterSpacing: 1.2,
    color: colors.inkSoft,
    marginBottom: 8,
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    fontSize: 9,
    color: colors.inkFaint,
  },
  divider: {
    height: 1,
    backgroundColor: '#E5E2D9',
    marginVertical: 18,
  },
  section: {
    marginTop: 14,
  },
  sectionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  accentDot: {
    width: 8,
    height: 8,
    backgroundColor: colors.red,
    borderRadius: 4,
    marginRight: 10,
  },
  sectionTitle: {
    fontSize: 9,
    fontWeight: 600,
    color: colors.inkFaint,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },
  experienceEntry: {
    marginBottom: 16,
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
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
    marginBottom: 6,
  },
  bulletList: {
    marginLeft: 14,
  },
  bullet: {
    fontSize: 9.5,
    color: colors.inkSoft,
    marginBottom: 4,
    lineHeight: 1.55,
  },
  educationEntry: {
    marginBottom: 12,
  },
  educationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  educationDegree: {
    fontSize: 11,
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
    gap: 8,
  },
  skillBadge: {
    fontSize: 8,
    backgroundColor: colors.paperAlt,
    color: colors.inkSoft,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
  },
  summary: {
    fontSize: 10,
    color: colors.inkSoft,
    lineHeight: 1.65,
  },
});

interface NorthlinePDFProps {
  data: ResumeData;
}

const NorthlinePDF: React.FC<NorthlinePDFProps> = ({ data }) => {
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
          <Text style={styles.title}>{personalInfo.email}</Text>
          <View style={styles.contactRow}>
            {contactItems.map((item, i) => (
              <Text key={i}>
                {i > 0 ? ' · ' : ''}{item}
              </Text>
            ))}
          </View>
        </View>

        <View style={styles.divider} />

        {/* Summary */}
        {summary && (
          <View style={styles.section}>
            <View style={styles.sectionTitleRow}>
              <View style={styles.accentDot} />
              <Text style={styles.sectionTitle}>Summary</Text>
            </View>
            <Text style={styles.summary}>{summary}</Text>
          </View>
        )}

        <View style={styles.divider} />

        {/* Experience */}
        {experience.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionTitleRow}>
              <View style={styles.accentDot} />
              <Text style={styles.sectionTitle}>Experience</Text>
            </View>
            {experience.map((exp) => (
              <View key={exp.id} style={styles.experienceEntry} wrap>
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
                    {exp.bullets.filter(Boolean).map((bullet, i) => (
                      <Text key={i} style={styles.bullet}>
                        – {bullet}
                      </Text>
                    ))}
                  </View>
                )}
              </View>
            ))}
          </View>
        )}

        <View style={styles.divider} />

        {/* Education */}
        {education.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionTitleRow}>
              <View style={styles.accentDot} />
              <Text style={styles.sectionTitle}>Education</Text>
            </View>
            {education.map((edu) => (
              <View key={edu.id} style={styles.educationEntry}>
                <View style={styles.educationHeader}>
                  <Text style={styles.educationDegree}>{edu.degree}</Text>
                  <Text style={styles.experienceDate}>
                    {edu.startDate} — {edu.endDate}
                  </Text>
                </View>
                <Text style={styles.educationSchool}>
                  {edu.school}{edu.location ? ` — ${edu.location}` : ''}
                </Text>
              </View>
            ))}
          </View>
        )}

        <View style={styles.divider} />

        {/* Skills */}
        {skills.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionTitleRow}>
              <View style={styles.accentDot} />
              <Text style={styles.sectionTitle}>Skills</Text>
            </View>
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

export default NorthlinePDF;
